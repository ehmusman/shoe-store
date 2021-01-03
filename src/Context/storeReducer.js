
const StoreReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.cart.length === 0) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            } else if (state.cart.every(item => item.id !== action.payload.id)) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            } else {
                return {
                    ...state
                }
            }
        default:
            return state;
    }
}
export default StoreReducer;