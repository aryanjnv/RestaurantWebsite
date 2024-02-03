import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const [quantity,setQuantity]=useState(0)
  let totalAmount=0;
  
  const cartcntxt=useContext(CartContext)

  const increaseQuantityHandler=(itemIndex)=>{
   setQuantity(cartcntxt.items[itemIndex].quantity+=1)
   
  }
  const decreaseQuantityHandler=(itemIndex)=>{
    setQuantity(cartcntxt.items[itemIndex].quantity-=1)
  }


  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntxt.items.map((item,index) => (
        cartcntxt.items[index].quantity?
        <li className={classes.li} key={index}>
          <span>Name:{item.name}</span>
           <span>Price:{item.price}</span>
            <span>Quantity:{item.quantity}</span>
            <span><button onClick={()=>increaseQuantityHandler(index)}>+</button>
            <button onClick={()=>decreaseQuantityHandler(index)}>-</button></span>

            </li>:''
      ))}
    </ul>
  );

  cartcntxt.items.forEach((item)=>{
    totalAmount=totalAmount+Number(item.price)*(item.quantity)
  })
  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;