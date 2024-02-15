import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name:"products",
  initialState:{
    filterProducts : JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    //doing this soo that after refreshing the page u can see the image back instead of empty list
    singleProduct:JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
  },
  reducers:{
    filteredProducts(state,action){
        try{
            const filter = storeData.filter((product)=>product.type === action.payload);
            state.filterProducts=filter;
            
            const saveState = JSON.stringify(filter);
            sessionStorage.setItem("filteredData", saveState);
        }
        catch(err){
            return err;
        }
    },
    singleProduct(state,action){
      try{
        const oneProduct = storeData.filter(
          (product)=> product.id === action.payload)
          state.singleProduct = oneProduct;
          const saveState = JSON.stringify(oneProduct);
          sessionStorage.setItem("oneProduct", saveState);
          
      }
      catch(err){
        return err
      }
    }
  }
})

export const {filteredProducts,singleProduct} = productSlice.actions;
export const productReducer = productSlice.reducer;