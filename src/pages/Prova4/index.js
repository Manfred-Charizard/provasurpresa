import { useState } from "react";
import './index.scss';
import contar from '../../indexx.js';

export default function Index() {
    //função contar
    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');
    const [resp, setResp] = useState([]);


    
    //função contar 
    function Contar( inicio, final) {
        let z = 0;
        const y =[];
        for(let x = inicio; x <= final; x++){
            y[z] = x;
            z++;
        }
        return y;
    }


    async function aooa(){
        let a = Contar(inicio, final)
        setResp(a);
    }
    return (

        <div>
            <h1> contar ate</h1>
            <div>
                <label> insira o numero inicial </label>
                <input type='number' value={inicio} onChange={e => setInicio(e.target.value)} />
            </div>
            <div>
                <label> insira o numero final </label>
                <input type='number' value={final} onChange={e => setFinal(e.target.value)} />
            </div>  
            <button onClick={aooa}> calcular </button>
            <div>
               {resp}
            </div>
        </div>
    )

}