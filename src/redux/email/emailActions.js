import { emailActionTypes } from "./emailActionTypes";
import axios from "axios";


const API_EMAIL = 'https://training.cleverland.by/shop/email'
// const MOCK_API = 'https://6181695f32c9e200178047e4.mockapi.io/subscribe'



export const showEmailMainLoader = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.SHOW_EMAIL_MAIN_LOADER,
    });
};

export const hideEmailMainLoader = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.HIDE_EMAIL_MAIN_LOADER,
    });
};


export const showEmailFooterLoader = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.SHOW_EMAIL_FOOTER_LOADER,
    });
};

export const hideEmailFooterLoader = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.HIDE_EMAIL_FOOTER_LOADER,
    });
};

export const enableMainButton = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.BUTTON_MAIN_ENABLE,
        payload: false
    });
}

export const disableMainButton = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.BUTTON_MAIN_DISABLE,
        payload: true
    });
}

export const enableFooterButton = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.BUTTON_FOOTER_ENABLE,
        payload: false
    });
}

export const disableFooterButton = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.BUTTON_FOOTER_DISABLE,
        payload: true
    });
}

export const clear = () => (dispatch) => {
    dispatch({
        type: emailActionTypes.CLEAR,
    });
}


export const sendMainEmail = (email) => (dispatch) => {
    dispatch(showEmailMainLoader())
    axios.post(API_EMAIL, {
        mail: email
    })
        .then(() => {
            dispatch(hideEmailMainLoader())
            dispatch({
                type: emailActionTypes.SEND_EMAIL_MAIN_SUCCESS,
                payload: 'Успешно'
            })
            dispatch(disableMainButton())
        })
        .catch(({ message }) => {
            dispatch(hideEmailMainLoader())
            console.log(message)
            dispatch({
                type: emailActionTypes.SEND_EMAIL_MAIN_FAILURE,
                payload: message
            })
            dispatch(enableMainButton())
        })
}


export const sendFooterEmail = (email) => (dispatch) => {
    dispatch(showEmailFooterLoader())
    axios.post(API_EMAIL, {
        mail: email
    })
        .then(() => {
            dispatch(hideEmailFooterLoader())
            dispatch({
                type: emailActionTypes.SEND_EMAIL_FOOTER_SUCCESS,
                payload: 'Успешно'
            })
            dispatch(disableFooterButton())
        })
        .catch(({ message }) => {
            dispatch(hideEmailFooterLoader())
            console.log(message)
            dispatch({
                type: emailActionTypes.SEND_EMAIL_FOOTER_FAILURE,
                payload: message
            })
            dispatch(enableFooterButton())
        })
}