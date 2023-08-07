import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Uno = () => {
    const dispatch = useDispatch();
    const miNombreAhora = useSelector(state => state.unValor.miNombre)

    return(
        <>
        <h1>{miNombreAhora}</h1>
        </>
    )
};

export default Uno