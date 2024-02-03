import React, { useContext } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {
  const cartcntx=useContext(CartContext)
  console.log('reinitialized cartcntx',cartcntx)

  const addItemToCart=(event)=>{
    event.preventDefault();
    //update the cartcntx.items
   
   const quantity=document.getElementById('amount_' + props.id).value
   console.log('quantity',quantity)
   cartcntx.addItem({...props.item,quantity:quantity})
   console.log('after add to Item',cartcntx)

  }
  return (
    <form className={classes.form}>

       <Input label="Amount" input={{
        id:'amount_' + props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'

       }}/>
        <button onClick={addItemToCart}>+ Add</button>
      
    </form>
  )
}

export default MealItemForm