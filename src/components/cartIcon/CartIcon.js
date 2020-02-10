import React from 'react'
import {ReactComponent as ShopingIcon} from '../../assets/shoppingBag.svg'
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cartSelectors'

import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartIcon.scss'
import { createStructuredSelector } from 'reselect';
const CartIcon = ({toggleCartHidden,itemCount}) => {
    return (
        <div className='cartIcon' onClick={toggleCartHidden}>
            <ShopingIcon className='shoppingIcon'/>
            <span className="itemCount">{itemCount}</span>
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    itemCount : selectCartItemsCount

})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
