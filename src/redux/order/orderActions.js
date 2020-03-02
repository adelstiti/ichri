import { ADD_ORDER} from "../types";
 

export const addOrder = cart => ({
    type: ADD_ORDER,
    payload : cart,
    total : cart.reduce((total,item) => total + item.quantity*item.price,0)
})
