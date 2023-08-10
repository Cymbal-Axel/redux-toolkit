import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarMiNombre } from '../store/misSlice';

const Uno = () => {
    const dispatch = useDispatch();
    const miNombreAhora = useSelector(state => state.unValor.miNombre)

    const modificar = () => {
        dispatch(guardarMiNombre('Bob el constructor'))
    }
    return(
        <>
        <h1>{miNombreAhora}</h1>
        <button onClick={modificar}>Modificar Nombre</button>
        </>
    )
};

export default Uno