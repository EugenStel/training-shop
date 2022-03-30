import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cartReducer } from './cart/cartReducer'
import { productsReducer } from './products/productsReducer'
import { emailReducer } from './email/emailReducer'
import { reviewReducer } from './rewiew/reviewReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    email: emailReducer,
    review: reviewReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);