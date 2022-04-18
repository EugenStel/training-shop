import axios from "axios"
import { orderActionTypes } from "./orderActionTypes"
import { API_LINKS } from "../../constants/api/api"

export const fetchCities = (storeAdress, country) => (dispatch) => {
    axios.post(API_LINKS.CITIES, {
        city: storeAdress,
        country: country
    })
        .then((res) => {
            dispatch({
                type: orderActionTypes.FETCH_CITIES,
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch({
                type: orderActionTypes.FETCH_CITIES_ERROR,
                payload: error
            })
        })
}

export const fetchCountries = () => (dispatch) => {
    axios.get(API_LINKS.COUNTRIES)
        .then((res) => {
            dispatch({
                type: orderActionTypes.FETCH_COUNTRIES,
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch({
                type: orderActionTypes.FETCH_COUNTRIES_ERROR,
                payload: error
            })
        })
}

export const sendOrder = (order) => (dispatch) => {
    axios.post(API_LINKS.ORDER, order).then((res) => {
        dispatch({
            type: orderActionTypes.SEND_ORDER,
            payload: res.data
        })
    })
        .catch((res) => {
            dispatch({
                type: orderActionTypes.SEND_ORDER_ERROR,
                payload: res.message
            })
        })
}

export const clearErrors = () => (dispatch) => {
    dispatch({
        type: orderActionTypes.CLEAR_ORDER_ERRORS,
    })
}