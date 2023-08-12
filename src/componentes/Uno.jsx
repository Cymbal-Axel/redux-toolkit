import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarMiNombre, incrementarPuntuacion, modificarUnValor } from '../store/misSlice';

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

    const modificarArray = () =>{
        dispatch(modificarUnValor({
            indice:0,
            nuevoNombre:"React",
            nuevoInicio: "Mayo 2013"
        }))
    }

    const agregar = () => {

    }

    const eliminar = () => {
        
    }
    return(
        <>
        <h1>{miNombreAhora}</h1>
        <h1>{miPuntiacionAhora}</h1>
        <button onClick={incrementar}>incrementar puntuacion</button>
        <button onClick={modificar}>Modificar Nombre</button>
        <button onClick={modificarArray}>Modificar Array</button>
        <button onClick={agregar}>Agregar un Valor</button>
        <button onClick={eliminar}>Eliminar un Valor</button>
        </>
    )
};

export default Uno