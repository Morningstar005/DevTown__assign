import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    currentPage:1,
    loading:false,
    search:"",
    category:"",
    productPerPage:5,
    ProductRange:"",
}


const ProductsSlices = createSlice({
    name:"product",
    initialState:initialstate,
    reducers:{
        setLoading(state,value){
            state.loading = value.payload
        },
        setCurrentPage(state,value){
            state.currentPage = value.payload
        },
        setSearch(state,value){
            state.search = value.payload
        },
        setCategory(state,value){
            state.category = value.payload
        },
        setProductRange(state,value){
            state.ProductRange = value.payload
        }
    }
})

export const {setLoading,setCurrentPage,setSearch,setCategory,setProductRange}=ProductsSlices.actions;
export default ProductsSlices.reducer;
