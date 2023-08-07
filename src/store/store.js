import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        unValor:origenSlice.reducer
    }
})