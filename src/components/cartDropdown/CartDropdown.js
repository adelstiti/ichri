import React from 'react'
import './CartDropdown.scss'
import CartItem from '../cartItem/CartItem'
import { connect } from 'react-redux'

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cartDropdown">
            <div className="cartItems">
                {
                    cartItems.map(item => <CartItem key={item.id} item={item}/> )
                }
            </div>
            <button className='btn btn-raised btn-dark'>GO TO CHECKOUT</button>
        </div>
    )
}

const mapStateToProps = ({cart : {cartItems}}) => ({
    cartItems
  });

  
  export default connect(mapStateToProps)(CartDropdown);
   