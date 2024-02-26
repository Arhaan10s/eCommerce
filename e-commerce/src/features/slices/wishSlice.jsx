import { createSlice } from '@reduxjs/toolkit';

export const wishSlice = createSlice({
    name:'wish',
    initialState:{
        wish:[],
        totalWish:0
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
                    text:productId.text,
                    name:productId.name,
                    color:productId.color,
                })
                state.totalWish++;
            }
            catch(err){
                return err;
            }
        }
    }
})

export const {addToWish} = wishSlice.actions;
export const wishReducer =  wishSlice.reducer;