import { productsActionTypes } from "./productsActionTypes";
import axios from 'axios'

const API_URL = 'https://training.cleverland.by/shop/products'


export const showLoader = () => (dispatch) => {
    dispatch({
        type: productsActionTypes.SHOW_LOADER,
    });
};

export const hideLoader = () => (dispatch) => {
    dispatch({
        type: productsActionTypes.HIDE_LOADER,
    });
};


export const fetchProducts = () => (dispatch) => {
    dispatch(showLoader());
    axios.get(API_URL)
        .then((res) => {
            dispatch(hideLoader());
            dispatch({
                type: productsActionTypes.FETCH_PRODUCTS,
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch(hideLoader());
            dispatch({
                type: productsActionTypes.FETCH_PRODUCTS_FAILURE,
                payload: error
            })
        })
    // .finally(() => dispatch({
    //     type: productsActionTypes.FETCH_PRODUCTS_END
    // }))
}