import { useState } from "react";
import './index.scss';

export default function Notas(){
const [alunos, setAlunos] = useState([]);
const [qtdAlunos, setQtdAlunos] = useState([]);
const [notas, setNotas] = useState([]);
const [resposta, setResposta] = useState([])

function Alunos(){
    let a = [];
    for (let x = 1; x <= qtdAlunos; x++) {
        a[x] = x;
       
    }
    setAlunos(a)
} 

function somar(){
    let x = [];
    for(let y = notas; )
}


//function Media(){
  //  let abacaxi = notas * qtdAlunos;
    //let limão = abacaxi / qtdAlunos;
    //return limão;
//}

    return (
        <main className='page'>
            <h1> Função das Notas</h1>

            <div>
                <label> Quantidade de alunos:</label>
                <input type="number" value={qtdAlunos} onChange={e => setQtdAlunos(e.target.value)}/>
                <button onClick={Alunos}>ok</button>
            </div>
            {alunos.map(alunos => 
                <div>
                        <div>{alunos}</div>
                        <input type='text' />                 
                    
                </div> )}
            <div>
                <button>Calcular</button>
                <br/>
                <label>Media:</label>
                <br/>
                <label>Maior:</label>
                <br/>
                <label>Menor:</label>
            </div>
            

        </main>
    )
}
