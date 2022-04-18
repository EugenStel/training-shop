export const host = 'https://training.cleverland.by/shop/'

const endPoints = {
    FOR_COUNTRIES: 'countries',
    FOR_CITIES: 'search/cities',
    FOR_ORDER: 'cart'
}

export const API_LINKS = {
    COUNTRIES: `${host}${endPoints.FOR_COUNTRIES}`,
    CITIES: `${host}${endPoints.FOR_CITIES}`,
    ORDER: `${host}${endPoints.FOR_ORDER}`
}