export const reducer = (state, action) => {
    /// function 
    switch (action.type) {
        case "buy-one-item" :
            return {...state, products : state.products - 1 }; 
        case "refill-product" :
            return {...state, products: action.quantity}
        default :
        return state;
    }
}

