import { productsActionTypes } from "./productsActionTypes";
import axios from 'axios'

const API_URL = 'https://training.cleverland.by/shop/products'

export const fetchProducts = () => (dispatch) => {
    axios.get(API_URL)
        .then((res) => dispatch({
            type: productsActionTypes.FETCH_PRODUCTS,
            payload: res.data
        }))
        .catch((error) => dispatch({
            type: productsActionTypes.FETCH_PRODUCTS_FAILURE,
            payload: error
        }))
        .finally(() => dispatch({
            type: productsActionTypes.FETCH_PRODUCTS_END
        }))
}