import { cartActionTypes } from "./cartActionTypes";

const initialState = {
    isCartOpen: false,
    items: [],
};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.SET_CART_OPEN: {
            return {
                ...state,
                isCartOpen: action.payload,
            };
        }
        case cartActionTypes.ADD_ITEM_TO_CART: {
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        }
        case cartActionTypes.DELETE_ITEM_FROM_CART: {
            return {
                ...state,
                items: state.items.filter(({ id }) => id !== action.payload),
            };
        }
        case cartActionTypes.CHANGE_ITEM_AMOUNT: {
            const { id, value } = action.payload;
            const items = state.items.map((item) => ({
                ...item,
                amount: item.id === id && value > 0 ? value : item.amount,
            }));
            return {
                ...state,
                items,
            };
        }
        case cartActionTypes.CLEAR_CART: {
            return {
                ...state,
                items: []
            };
        }
        default:
            return state;
    }
}