import { TOGGLE_CART_HIDDEN,ADD_ITEM,CLEAR_ITEM,REMOVE_ITEM } from "../types";
import {addItemToCart,removeItem} from './cartUtils'
const initialState = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = initialState,action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }

        case ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }

        case CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case REMOVE_ITEM :
            return{
                ...state,
                cartItems : removeItem(state.cartItems,action.payload)
            }            

            
        default : return state ;
    }
}

export default cartReducer
