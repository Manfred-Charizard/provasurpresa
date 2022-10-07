import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acai from './pages/Prova1/index.js' 
export default function SiteRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Acai />}/>
               
            </Routes>
        </BrowserRouter>
    )
}