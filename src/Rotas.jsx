import React from 'react'
import { Route, Routes } from 'react-router'
import HelloWorld from './components/HelloWorld'
import Arrays from './pages/Arrays'
import Estados from './pages/Estados'
import Objetos from './pages/Objetos'
import Pagina1 from './pages/Pagina1'
import Pagina2 from './pages/Pagina2'

const Rotas = () => {
    return (
        <div>
             <Routes>
            <Route exact path="/" element={<HelloWorld />} />
            <Route exact path="/pagina1" element={<Pagina1 />} />
            <Route exact path="/pagina2" element={<Pagina2 />} />
            <Route exact path="/arrays" element={<Arrays />} />
            <Route exact path="/objetos" element={<Objetos />} />
            <Route exact path="/estados" element={<Estados />} />
          </Routes>
        </div>
    )
}

export default Rotas
