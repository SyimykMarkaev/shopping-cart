import Main from "./Main";
import Aside from "./Aside";
import { products } from "../products";
import { useState } from "react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(products);

  return (
    <div>
      <h1>My Shopping Cart</h1>
      <div className="wrapper">
        <Main cartItems={cartItems} />
        <Aside />
      </div>
    </div>
  );
}
