import React from 'react'
import cart from '../CartWidget/cart4.svg'

const CartWidgetComponent = () => {
     return (
         <div>
            <button className="btn" type="submit"> 
            <img src={cart} alt="cart-widget"/>
            </button>
        </div>
     )
 }

 export default CartWidgetComponent