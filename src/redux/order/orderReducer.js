import { orderActionTypes } from "./orderActionTypes";

const initialState = {
    isLoading: false,
    response: null,
    error: null,
    citiesError: null,
    countriesError: null,
    cities: [],
    countries: []
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case orderActionTypes.FETCH_CITIES: {
            return {
                ...state,
                cities: action.payload
            };
        }
        case orderActionTypes.FETCH_CITIES_ERROR: {
            return {
                ...state,
                citiesError: action.payload
            };
        }
        case orderActionTypes.FETCH_COUNTRIES: {
            return {
                ...state,
                countries: action.payload
            };
        }
        case orderActionTypes.FETCH_COUNTRIES_ERROR: {
            return {
                ...state,
                countriesError: action.payload
            };
        }
        case orderActionTypes.SEND_ORDER: {
            return {
                ...state,
                response: action.payload
            };
        }
        case orderActionTypes.SEND_ORDER_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        case orderActionTypes.CLEAR_ORDER_ERRORS: {
            return {
                ...state,
                error: null,
                response: null
            };
        }
        default:
            return state
    }
}