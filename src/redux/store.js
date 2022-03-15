import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cartReducer } from './cart/cartReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cart: cartReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);