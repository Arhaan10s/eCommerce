import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name:"products",
  initialState:{
    filterProducts : JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    //doing this soo that after refreshing the page u can see the image back instead of empty list
  },
  reducers:{
    filteredProducts(state,action){
        try{
            const filter = storeData.filter((product)=>product.type === action.payload);
            state.filterProducts=filter;
            console.log("filter",filter);
            const saveState = JSON.stringify(filter);
            sessionStorage.setItem("filteredData", saveState);
        }
        catch(err){
            return err;
        }
    },
  }
})

export const {filteredProducts} = productSlice.actions;
export const productReducer = productSlice.reducer;