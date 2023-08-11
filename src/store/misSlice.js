import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
    name: 'unValor',
    initialState: {miNombre: 'axel'},
    reducers: {
        guardarMiNombre: (state, action) => {
            state.miNombre = action.payload;
        }
    }
});

export const otroSlice = createSlice({
    name: 'otroValor',
    initialState: {puntuacion: 0},
    reducers:{
        incrementarPuntuacion: (state)=>{
            state.puntuacion = state.puntuacion + 1;
        }
    }
})

export const {incrementarPuntuacion} = otroSlice.actions;
export const {guardarMiNombre} = origenSlice.actions;