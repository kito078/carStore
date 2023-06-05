import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //calculating  totalAmount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //we first want to check if the item is already part of the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //now we want to have the item as with its properties
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    //it creates an updated item by copying the existing item and updating its amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //replaces the existing item with the updated one in the items array
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      //If the item does not exist, it adds the new item to the items array using the concat method.
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  //Firstly, the REMOVE action is triggered when the user wants to remove
  //an item from the cart. Here's the code that handles the REMOVE action:
  if (action.type === "REMOVE") {
    //irst finds the index of the item to be removed from the state using the findIndex() method, which returns the
    //  index of the first element that satisfies the provided testing function.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //Next, the code extracts the existing item from the items array using the index found in the previous step.
    const existingItem = state.items[existingCartItemIndex];

    //After that, the code updates the totalAmount by subtracting the price of the item that needs to be removed from the current totalAmount.
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    //Next, the code checks if the amount of the item that needs to be removed is equal to 1. If yes, the item is completely removed from the items array using the filter() method.
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      //If the amount of the item is greater than 1, the code creates an updated item by copying the existing item and updating its amount. Then, the code replaces the existing item with the updated one in the items array.
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [blog, setBlog] = useState([]);
  const [cartState, dipatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToHandler = (item) => {
    dipatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromHandler = (id) => {
    dipatchCartAction({ type: "REMOVE", id: id });
  };

  const blogHandler = (blogItems) => {
    setBlog({ blogItems });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToHandler,
    removeItem: removeItemFromHandler,
    blogItem: blogHandler,
    blogs: blog,
  };
  //console.log(totalAmount);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
