import { productsActionTypes } from "./productsActionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    products: {
        men: [],
        women: []
    }
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case productsActionTypes.FETCH_PRODUCTS: {
            return {
                ...state,
                isLoading: true,
                products: action.payload
            };
        }
        case productsActionTypes.FETCH_PRODUCTS_FAILURE: {
            return {
                ...state,
                isLoading: true,
                isError: true
            };
        }
        case productsActionTypes.FETCH_PRODUCTS_END: {
            return {
                ...state,
                isLoading: false
            };
        }
        default:
            return state
    }
}