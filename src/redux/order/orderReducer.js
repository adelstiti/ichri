import { ADD_ORDER } from "../types";


const initialState = {
    client : {
        _id  : 545122412,
        name : "Salim Fehri",
        adresse : "Rue 145"
    },
    products : null,
}

const orderReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_ORDER :  
        return {
            ...state,
            products : action.payload,
            Total : action.total,
            Etat : 'Passe'
        }
        default : return state ;
    }
} 

export default orderReducer

