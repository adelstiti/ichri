import React from 'react'
import {ReactComponent as ShopingIcon} from '../../assets/shoppingBag.svg'
import {connect} from 'react-redux';


import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartIcon.scss'
const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cartIcon' onClick={toggleCartHidden}>
            <ShopingIcon className='shoppingIcon'/>
            <span className="itemCount">0</span>
        </div>
    )
}



export default connect(null,{toggleCartHidden})(CartIcon)
