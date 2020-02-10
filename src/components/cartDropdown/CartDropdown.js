import React from 'react'
import './CartDropdown.scss'
import CartItem from '../cartItem/CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cartActions'


const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className="cartDropdown">
                { cartItems.length ? 
            <>
            <div className="cartItems">
                {                cartItems.map(item => <CartItem key={item.id} item={item}/> )}
            </div>
            <button className='btn btn-raised btn-dark' 
            onClick={() => {
                history.push('./checkout');
                dispatch(toggleCartHidden())
            }}
             >GO TO CHECKOUT</button>
            </>
            :
                <span className="emptyMessage">Your Cart is empty </span>
                }
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    cartItems : selectCartItems
  });

  
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));
   