import { createSlice } from '@reduxjs/toolkit';

export const wishSlice = createSlice({
    name:'wish',
    initialState:{
        wish:[],
        totalWish:0,
    },
    reducers:{
        addToWish(state,action){
            const productId = action.payload;

            try{
   
                state.wish.push({
                    id:productId.id,
                    price:productId.price,
                    size:productId.size,
                    img:productId.img,
                    amount:1,
                    text:productId.text,
                    name:productId.name,
                    color:productId.color,
                })
                 
                state.totalWish++;
            }
            catch(err){
                return err;
            }
        },
        removeWish(state,action){
            const productId = action.payload;
            try{
                state.wish = state.wish.filter(
                    (product)=>
                        product.id !== productId.id ||
                        product.size !== productId.size ||
                        product.color !== productId.color
                    )
                    state.totalWish--;
                }
            catch(err){
                return err;
            }
        }
    }
})

export const {addToWish,removeWish} = wishSlice.actions;
export const wishReducer =  wishSlice.reducer;