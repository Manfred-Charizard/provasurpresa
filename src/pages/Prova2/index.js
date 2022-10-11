import { useState } from 'react';
import './index.scss';

export default function Index(){

    //salario liquido
    const [resposta, setResposta] = useState();
    const [ salario, setSalario] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [bonus, setBonus] = useState(0);

    //salario liquido
    function Salario(){
        let porcentagem = salario * bonus;
        let apapa = porcentagem /100;
        let soma = apapa + salario;
        let final = soma - desconto;
        setResposta(final);
    }

    //contagem de paradas
    const [capacidade, setCapacidade] = useState('');
    const [consumo, setConsumo] = useState('');
    const [distancia, setDistancia] = useState('');
    const [resp, setResp] = useState();

    //contagem de paradas
    function Paradas(){
        let x = capacidade * consumo;
        let y = distancia / x;

        setResp(Math.ceil(y))
    }

    //situacao febre
    const [Temperatura, setTemperatura] = useState("");
    const [respo, setRespo] = useState("");

    function Febre(){
        let x ="";

        if(Temperatura >= 41){
            x= "A situação para sua temperatura é Hipertemia";
        }

        else if(Temperatura >= 39.6 && Temperatura < 41){
            x = " A situação para a sua temperatura é Febre alta";
        }

        else if(Temperatura >= 37.6 && Temperatura < 39.6){
            x = "A situação para a sua temperatura é Febre";
        }

        else if (Temperatura >=36 && Temperatura < 37.6){
            x = "A situação para a sua temperatura é normal";
        }

        else if (Temperatura < 36){
            x = "A situação para a sua temperatura é Hipotermia";
        }

        setRespo(x);

    }
   
    return(
        <div className='prova-page'>
            <h1> Salário Líquido </h1>

            <div>
                <label> Insira o salario base: </label>
                <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value)   )}/>
            </div>
            
            <br/>
            <div>
                <label> Insira o bônus: </label>
                <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))} />
            </div>
            
            <br/>
            <div>
                <label> Insira o desconto: </label>                                                                     
                <input type="number" value={desconto} onChange={e => setDesconto(Number(e.target.value))}/>
            </div>
            
            
            <button onClick={Salario}> Calcular</button> 

            <div>
                {resposta}
            </div>
        
            <h1>Contagem de Paradas</h1>
            <div>
                <label> Insira a capacidade do tanque: </label>
                <input type="text" value={capacidade} onChange={e => setCapacidade(Number(e.target.value)   )}/>
            </div>
            
            <br/>
            <div>
                <label> Insira o consumo: </label>
                <input type="text" value={consumo} onChange={e => setConsumo(Number(e.target.value))} />
            </div>
            
            <br/>
            <div>
                <label> Insira a distancia: </label>                                                                     
                <input type="text" value={distancia} onChange={e => setDistancia(Number(e.target.value))}/>
            </div>
            
            
            <button onClick={Paradas}> Calcular</button> 

            <div>
                <p> coe voce vai fazer {resp} parada(s)</p>
            </div>

            <h1>Situação da febre</h1>
            <div>
                <label>Indique a sua temperatura corporal:</label>
                <input type= "number" value={Temperatura} onChange={e => setTemperatura(Number(e.target.value))}/>
            
            </div>

            <button onClick={Febre}>Verificar temperatura</button>

            <div>
                {respo}
            </div>
        </div>
        
    );
}