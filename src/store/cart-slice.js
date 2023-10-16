import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items : [],
        totalQuantity:0,
        finalPrice:0
    },
    reducers:{
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
            state.finalPrice=action.payload.finalPrice;
        },
        addItemToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item=>item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    name:newItem.name,
                    image:newItem.image
                })
                state.finalPrice=state.finalPrice+newItem.price;
                
                
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice + newItem.price;
                state.finalPrice=state.finalPrice+existingItem.totalPrice;
                
            }
        },

        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item=>item.id === id);
            state.totalQuantity--;

            if(existingItem.quantity === 1)
            {
                state.items = state.items.filter(item => item.id !== id);
                state.finalPrice=state.finalPrice-existingItem.price;
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                state.finalPrice=state.finalPrice-existingItem.price;
            }
        }
    }
});

export const cartActions =  cartSlice.actions;
export default cartSlice;