import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartTotal } from '../../redux/cart/cartSelectors'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem'

import './Checkout.scss'

const Checkout = ({cartItems,total}) => {
    return (
        <div className="checkoutPage">
            <div className="checkoutHeader"> 
                <div className="checkoutBlock">
                    <span>Product</span>
                </div>
                <div className="checkoutBlock">
                    <span>Product</span>
                </div>
                <div className="checkoutBlock">
                    <span>Description</span>
                </div>
                <div className="checkoutBlock">
                    <span>Quantite</span>
                </div>
                <div className="checkoutBlock">
                    <span>Price</span>
                </div>

                <div className="checkoutBlock">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )) 
            }
            <div className="total">
                Total : ${total} 
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
