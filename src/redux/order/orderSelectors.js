export const getCountries = ({ order: { countries } }) => countries;

export const getCities = ({ order: { cities } }) => cities;

export const getOrderError = ({ order: { error } }) => error;

export const getOrderResponse = ({ order: { response } }) => response;