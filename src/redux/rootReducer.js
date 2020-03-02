import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import orderReducer from './order/orderReducer';

export default combineReducers({
    user : userReducer,
    cart : cartReducer,
    order : orderReducer
});

