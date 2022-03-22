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
                // isLoading: true,
                products: action.payload
            };
        }
        case productsActionTypes.FETCH_PRODUCTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        }
        case productsActionTypes.FETCH_PRODUCTS_END: {
            return {
                ...state,
                isLoading: false
            };
        }
        case productsActionTypes.HIDE_LOADER:
            return {
                ...state,
                isLoading: false,
            };
        case productsActionTypes.SHOW_LOADER:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state
    }
}