import { INITIAL_CARD_INFO, INITIAL_ADDRESS_INFO } from "../constants/order/initial-values"

export const clearLocalStorage = () => {
    localStorage.setItem('cardInfo', JSON.stringify(INITIAL_CARD_INFO))
    localStorage.setItem('addressInfo', JSON.stringify(INITIAL_ADDRESS_INFO))
    localStorage.setItem('email', JSON.stringify(''))
    localStorage.setItem('phone', JSON.stringify(''))
    localStorage.setItem('postcode', JSON.stringify(''))
    localStorage.setItem('countryStore', JSON.stringify(''))
    localStorage.setItem('storeAdress', JSON.stringify(''))
    localStorage.setItem('cashEmail', JSON.stringify(''))
}