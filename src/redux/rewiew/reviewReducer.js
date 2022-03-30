import { reviewsActionsTypes } from "./reviewActionsTypes";

const initialState = {
    showModal: false,
    reviewResponse: null,
    isLoading: false,
    reviewError: null,
    buttonDisable: true
};


export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case reviewsActionsTypes.CLEAR: {
            return {
                ...state,
                reviewResponse: null,
                isLoading: false,
                reviewError: null,
                buttonDisable: true
            };
        }
        case reviewsActionsTypes.SEND_REVIEW_SUCCESS: {
            return {
                ...state,
                reviewResponse: action.payload
            };
        }
        case reviewsActionsTypes.SEND_REVIEW_FAILURE: {
            return {
                ...state,
                reviewError: action.payload
            }
        }
        case reviewsActionsTypes.SHOW_REVIEW_LOADER: {
            return {
                ...state,
                isLoading: true
            }
        }
        case reviewsActionsTypes.HIDE_REVIEW_LOADER: {
            return {
                ...state,
                isLoading: false
            }
        }
        case reviewsActionsTypes.SHOW_MODAL_WINDOW: {
            return {
                ...state,
                showModal: true
            }
        }
        case reviewsActionsTypes.CLOSE_MODAL_WINDOW: {
            return {
                ...state,
                showModal: false
            }
        }
        default:
            return state
    }
}