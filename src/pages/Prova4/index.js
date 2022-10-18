import { useState } from "react";
import './index.scss';
import contar from '../../indexx.js';

export default function Index() {
    //função contar
    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');
    const [resp, setResp] = useState([]);
    const [Nlinha, setNlinha] = useState('');
    const [R, setR] = useState('');


    

    
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

    function Linha (t){
        const y =[];
        for (let x= 1; x <= t; x++){
            y[x] = "* ";
        }
        return y;
    }

    async function ver(){
        let x = Linha(Nlinha)
        setR(x)
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
            <div>
                <h1>Formar linha</h1>
                <div>
                    <label>Insira o numero de asteriscos </label>
                    <input type='number' value={Nlinha} onChange={e =>setNlinha(e.target.value)} /> 
                </div>
                <button onClick={ver}>Criar</button>
                <div>
                    {R}
                </div>
            </div>
        </div>
        
    )

}