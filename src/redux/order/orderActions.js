import { orderActionTypes } from "./orderActionTypes"
import axios from "axios"

const API_COUNTRIES = 'https://training.cleverland.by/shop/countries'
const API_CITIES = 'https://training.cleverland.by/shop/search/cities'
const API_ORDER = 'https://training.cleverland.by/shop/cart'

export const fetchCities = (storeAdress, country) => (dispatch) => {
    axios.post(API_CITIES, {
        "city": storeAdress,
        "country": country
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
    axios.get(API_COUNTRIES)
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
    axios.post(API_ORDER, order).then((res) => {
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