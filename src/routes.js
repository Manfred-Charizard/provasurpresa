import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acai from './pages/Prova1/index.js' 
import Salario from './pages/Prova2/index.js'

export default function SiteRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Acai />}/>
                <Route path='/salario' element={<Salario />}/>
            </Routes>
        </BrowserRouter>
    )
}