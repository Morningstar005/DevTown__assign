import { combineReducers } from "@reduxjs/toolkit";
import ProductsReducer from "../slices/ProductSlices"

const rootReducer = combineReducers({
    prods:ProductsReducer
})

export default rootReducer