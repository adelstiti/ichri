import React from 'react'
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

import './CollectionItem.scss'

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item ;
    return (
        <div className="collectionItem">
            <div className="image" style={{backgroundImage : `url(${imageUrl})`}} />
                <div className="collectionFooter">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <button className='btn btn-raised btn-dark ' onClick={() => addItem(item)}>Add to cart</button>
        </div>
    )
}

export default  connect(null,{addItem})(CollectionItem)
