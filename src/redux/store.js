import {createStore,applyMiddleware} from 'redux'
import looger from 'redux-logger';
import rootReducer from './rootReducer';

const middleware = [looger] ;

const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;