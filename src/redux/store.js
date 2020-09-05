import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension';

import looger from 'redux-logger';
import rootReducer from './rootReducer';

const middleware = [looger] ;

 export const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
      )
    );
 export const persistor = persistStore(store)

