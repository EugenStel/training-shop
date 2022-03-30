import { reviewsActionsTypes } from "./reviewActionsTypes";
import axios from "axios";
import { fetchProducts } from "../products/productsActions";



// const MOCK_API = 'https://6181695f32c9e200178047e4.mockapi.io/reviews'
const REVIEW_API = 'https://training.cleverland.by/shop/product/review'

export const showLoader = () => (dispatch) => {
    dispatch({
        type: reviewsActionsTypes.SHOW_REVIEW_LOADER,
    });
};

export const hideLoader = () => (dispatch) => {
    dispatch({
        type: reviewsActionsTypes.HIDE_REVIEW_LOADER,
    });
};

export const showModal = () => (dispatch) => {
    dispatch({
        type: reviewsActionsTypes.SHOW_MODAL_WINDOW
    })
}

export const closeModal = () => (dispatch) => {
    dispatch({
        type: reviewsActionsTypes.CLOSE_MODAL_WINDOW
    })
}

export const sendReview = (review) => (dispatch) => {
    dispatch(showLoader())
    axios.post(REVIEW_API, {
        id: review.id,
        name: review.name,
        text: review.comment,
        rating: Number(review.ratingForm)
    })
        .then((res) => {
            dispatch(hideLoader())
            dispatch({
                type: reviewsActionsTypes.SEND_REVIEW_SUCCESS,
                payload: res
            })
            dispatch(closeModal())
            dispatch(fetchProducts())
        })
        .catch(({ message }) => {
            dispatch(hideLoader())
            dispatch({
                type: reviewsActionsTypes.SEND_REVIEW_FAILURE,
                payload: message
            })
        })
}