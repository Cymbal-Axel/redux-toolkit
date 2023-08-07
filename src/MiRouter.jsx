import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Uno from './componentes/Uno.jsx';
import Dos from './componentes/Dos.jsx';

const MiRouter = () => {
    return(
        <>
        <Router>
            <div>
                <Link to='/uno'><button>Ir al Uno</button></Link>
                <Link to='/dos'><button>Ir alDos</button></Link>
            </div>

            <Routes>
                <Route path="/uno" element={<Uno/>}/>
                <Route path='/dos' element={<Dos/>}/>
            </Routes>
        </Router>
        </>
    )
};

export default MiRouter