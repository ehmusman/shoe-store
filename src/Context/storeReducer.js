
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
        case 'INCREMENT_AMOUNT':
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.payload.id ? (product = action.payload) : product
                )
            }
        case 'REMOVE_CART':
            return {
                ...state,
                cart: state.cart.filter(rem => rem.id !== action.payload)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}
export default StoreReducer;