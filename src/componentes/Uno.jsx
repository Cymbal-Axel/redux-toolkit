import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarMiNombre, incrementarPuntuacion } from '../store/misSlice';

const Uno = () => {
    const dispatch = useDispatch();
    const miNombreAhora = useSelector(state => state.unValor.miNombre)
    const miPuntiacionAhora = useSelector(state => state.otroValor.puntuacion)

    const modificar = () => {
        dispatch(guardarMiNombre('Bob el constructor'))
    }

    const incrementar = () => {
        dispatch(incrementarPuntuacion())
    }
    return(
        <>
        <h1>{miNombreAhora}</h1>
        <h1>{miPuntiacionAhora}</h1>
        <button onClick={incrementar}>incrementar puntuacion</button>
        <button onClick={modificar}>Modificar Nombre</button>
        </>
    )
};

export default Uno