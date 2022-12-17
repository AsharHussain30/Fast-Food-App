import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[]
    },
    reducers: {
        add: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }
            else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        remove: (state, action) => {
            const remove = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = remove
    },
        increment: (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            itemInCart.quantity++;
        },
        decrement: (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart.quantity == 1){
                const remove = state.cart.filter((item) => item.id !== action.payload.id);
            } else{
                itemInCart.quantity--;
            };
        }


    },
});

export const { add, remove,increment,decrement } = cartSlice.actions;
export default cartSlice.reducer;