import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartTotal } from '../../redux/cart/cartSelectors'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem'
import './Checkout.scss'
import { addOrder } from '../../redux/order/orderActions'

const Checkout = ({cartItems,total,addOrder}) => {
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
            <button className='btn-dark ' onClick={() => addOrder(cartItems)}>Commander</button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps,{addOrder})(Checkout)
