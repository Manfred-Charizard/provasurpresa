import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acai from './pages/Prova1/index.js'
import Salario from './pages/Prova2/index.js'
import Orcamento from './pages/prova3/index.js'
import Array from './pages/Prova4/index.js'
import Cafe from './pages/Prova5/index.js'
import Notas from './pages/prova6/index.js'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Acai />} />
                <Route path='/salario' element={<Salario />} />
                <Route path='/orcamento' element={<Orcamento />} />
                <Route path='/contagem' element={<Array />} />
                <Route path='/cafe' element={<Cafe />} />
                <Route path='/nota' element={<Notas/>}/>
        </Routes>
        </BrowserRouter >
    )
}