import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingItem = items.find((element) => element.name === item.name);

    if (existingItem) {
      // If the item exists, update its quantity
      updateItems((prevItems) =>
        prevItems.map((existingItem) =>
          existingItem.name === item.name
            ? { ...existingItem, quantity: Number(existingItem.quantity) + Number(item.quantity) }
            : existingItem
        )
      );
    } else {
      // Otherwise, add the new item to the array
      updateItems((prevItems) => [...prevItems, item]);
    }

    console.log('inside addItemToCartHandler ', CartContext);
  };

  const removeItemFromCartHandler = (id) => {
    // Implement the logic to remove an item from the cart based on its ID
  };

  const cartContext = {
    items: items,

    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log('Indide CartContext Provider')}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
