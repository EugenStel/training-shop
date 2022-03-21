import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cartReducer } from './cart/cartReducer'
import { productsReducer } from './products/productsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);