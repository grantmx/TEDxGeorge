/**
*   Global State Manager:
*   - only put things in here that are truly global (e.g. Cart & Customer Data, Theme)
*   otherwise make it a local state or pass it in a prop
*/

// use our initial state as a type of manifest for the Global State
export const initialState = {
    user: {
        isLoggedIn: false,
        email: "",
        customer_group_id: 5,
    },
    widget: {
        isOpen: true,
        component: null,
    },
    cart: {
        total: 0,
        lineItems: []
    },
    thirdParty: {}
}


export const GlobalReducer = (state, action) => {
    switch(action.type){

        case "setCart":
            return{
                ...state,
                cart: action.data
            }

            

        case "addToCart":
            return{
                ...state,
                cart: {
                    ...state.cart,
                    total: state.cart.total + action.data.price,
                    lineItems: [
                        ...state.cart.lineItems,
                        action.data
                    ]
                }
                
            }

        case "setWidget":
            return{
                ...state,
                widget: action.data
            };
        

        default:
            throw new Error("Doh! You did not choose GlobalReducer method type to perform. Please try agin or go to GlobalContext.js for available types.")
    }
};
