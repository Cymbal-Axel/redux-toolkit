import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
    name: 'unValor',
    initialState: {miNombre: 'axel'},
    reducers: {
        guardarMiNombre: (state, action) => {
            state.miNombre = action.payload;
        }
    }
})

export const {guardarMiNombre} = origenSlice.actions;