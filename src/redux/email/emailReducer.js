import { emailActionTypes } from "./emailActionTypes";

const initialState = {
    emailMainResponce: null,
    isLoadingMain: false,
    emailMainError: null,
    emailFooterResponce: null,
    isLoadingFooter: false,
    emailFooterError: null,
    buttonMainDisable: true,
    buttonFooterDisable: true
};

export const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case emailActionTypes.CLEAR: {
            return {
                emailMainResponce: null,
                isLoadingMain: false,
                emailMainError: null,
                emailFooterResponce: null,
                isLoadingFooter: false,
                emailFooterError: null,
                buttonMainDisable: true,
                buttonFooterDisable: true
            }
        }
        case emailActionTypes.BUTTON_MAIN_ENABLE: {
            return {
                ...state,
                buttonMainDisable: action.payload
            };
        }
        case emailActionTypes.BUTTON_MAIN_DISABLE: {
            return {
                ...state,
                buttonMainDisable: action.payload
            };
        }
        case emailActionTypes.BUTTON_FOOTER_ENABLE: {
            return {
                ...state,
                buttonFooterDisable: action.payload
            };
        }
        case emailActionTypes.BUTTON_FOOTER_DISABLE: {
            return {
                ...state,
                buttonFooterDisable: action.payload
            };
        }
        case emailActionTypes.SEND_EMAIL_MAIN_SUCCESS: {
            return {
                ...state,
                emailMainResponce: action.payload,
                emailMainError: null
            };
        }
        case emailActionTypes.SEND_EMAIL_MAIN_FAILURE: {
            return {
                ...state,
                emailMainError: action.payload,
                emailMainResponce: null
            };
        }
        case emailActionTypes.SEND_EMAIL_FOOTER_SUCCESS: {
            return {
                ...state,
                emailFooterResponce: action.payload,
                emailFooterError: null
            };
        }
        case emailActionTypes.SEND_EMAIL_FOOTER_FAILURE: {
            return {
                ...state,
                emailFooterError: action.payload,
                emailFooterResponce: null
            };
        }
        case emailActionTypes.SHOW_EMAIL_MAIN_LOADER: {
            return {
                ...state,
                isLoadingMain: true
            };
        }
        case emailActionTypes.HIDE_EMAIL_MAIN_LOADER: {
            return {
                ...state,
                isLoadingMain: false
            };
        }
        case emailActionTypes.SHOW_EMAIL_FOOTER_LOADER: {
            return {
                ...state,
                isLoadingFooter: true
            };
        }
        case emailActionTypes.HIDE_EMAIL_FOOTER_LOADER: {
            return {
                ...state,
                isLoadingFooter: false
            };
        }
        default:
            return state
    }
}