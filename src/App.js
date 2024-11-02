import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { StoreProvider } from "./StoreProvider";

function App() {
  const initialState = [
    {
      key: "cartItemCount",
      actionType: "SET_CART_ITEM_COUNT",
      initialValue: 0, // Tracks the number of items in the shopping cart
      persist: false // This field should be persisted
    },
    {
      key: "userProfile",
      actionType: "SET_USER_PROFILE",
      initialValue: {}, // Stores user profile information
      persist: true // This field should also be persisted
    },
    {
      key: "cartItems",
      actionType: "SET_CART_ITEMS",
      initialValue: [], // Holds the items in the shopping cart
      persist: false // This field will not be persisted
    }
  ];

  return (
    <div className="App">
      <StoreProvider initialState={initialState}>
        <Header />
        <Home />
      </StoreProvider>
    </div>
  );
}

export default App;
