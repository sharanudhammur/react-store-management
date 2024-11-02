import React, { createContext, useReducer, useContext, useRef } from "react";

const StoreContext = createContext();

const reducer = (_, action) => {
  return action;
};

export function StoreProvider({ children, initialState }) {
  const loadPersistedState = initialState.map((ele) => ({
    ...ele,
    initialValue: ele.persist
      ? JSON.parse(localStorage.getItem(ele.key)) || ele.initialValue
      : ele.initialValue
  }));

  const [state, dispatch] = useReducer(reducer, loadPersistedState);
  const stateRef = useRef(state);

  const setState = (actions) => {
    const updatedState = state.map((item) => {
      if (actions[item.actionType] !== undefined) {
        localStorage.setItem(
          item.key,
          JSON.stringify(actions[item.actionType])
        );
        return { ...item, initialValue: actions[item.actionType] };
      }

      return item;
    });

    stateRef.current = updatedState;
    dispatch(updatedState);
  };

  return (
    <StoreContext.Provider value={{ state, setState, stateRef }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const { stateRef } = useContext(StoreContext);
  const data = {};

  stateRef.current.forEach((ele) => {
    data[ele.key] = ele.initialValue;
  });

  return data;
}

export function useDispatch() {
  const { setState } = useContext(StoreContext);

  return setState;
}
