import React from "react";
import { useDispatch, useStore } from "../StoreProvider";

function Header() {
  const { count } = useStore();

  // console.log("header", state.count);
  return <div>{count}</div>;
}

export default Header;
