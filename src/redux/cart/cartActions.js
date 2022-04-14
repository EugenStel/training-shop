import { cartActionTypes } from "./cartActionTypes";

export const addItem = (payload) => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload
})

export const deleteItem = (payload) => ({
    type: cartActionTypes.DELETE_ITEM_FROM_CART,
    payload
});

export const changeAmount = (payload) => ({
    type: cartActionTypes.CHANGE_ITEM_AMOUNT,
    payload
})

export const setCartOpen = (payload) => ({
    type: cartActionTypes.SET_CART_OPEN,
    payload
})

export const clearCart = () => (dispatch) => {
    dispatch({
        type: cartActionTypes.CLEAR_CART,
    })
}

