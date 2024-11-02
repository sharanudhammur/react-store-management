import React from "react";
import { useStore, useDispatch } from "../StoreProvider";

function Home() {
  const { cartItemCount } = useStore();
  const dispatch = useDispatch();

  return (
    <div>
      {cartItemCount}
      <button
        onClick={() =>
          dispatch({
            SET_CART_ITEM_COUNT: cartItemCount + 1
          })
        }
      >
        click
      </button>
    </div>
  );
}

export default Home;
