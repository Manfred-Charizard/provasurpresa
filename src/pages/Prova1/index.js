import { useState } from 'react'
import './index.scss'

export default function Index(){

{/*Açaí*/}
const [pequeno, setPequeno] = useState(0);
const [medio, setMedio] = useState(0);
const [grande, setGrande] = useState(0);
const [desconto, setDesconto] = useState(0)
const [preco, setPreco] = useState(0)

{/*Signo*/}
const [dia, setDia ] = useState (0); 
const [mes, setMes]  = useState (''); 
const [resul, setResul] = useState (false);


{/*Sorveteria*/} 
const [gramas, setGramas] = useState(0); 
const [vlTotal, setVlTotal] = useState(0);


{/*Função do Açaí*/}
function compra(){
    if(pequeno < 0 || medio < 0 || grande < 0 || desconto < 0){
        alert("Insira um valor positivo")
    }

    let total = (pequeno*17.50 + medio*15.00 + grande*17.50)*(desconto/100-1);
    total = Math.abs(total)

    setPreco(total)
}

{/*Função do Signo*/} 
function Signo (){ 
    try{
    let reposta = false 
    
    if (dia <= 0 || mes === Number) { 
    throw new Error('Dia ou mês inválido'); 
   } 

    if (mes === "setembro" && dia >= 23 && dia <= 30 || mes === "outubro" && dia >= 1 && dia <=22){ 
           
          reposta = true 
    } 
       setResul(reposta)
    }
    
    catch(err){
        alert(err
            )
    }
}

{/*Função do Sorveteria*/}
    function sorveteria(){ 
        try{
        if(gramas <= 0){
            alert('Peso inválido')
        } 
        let valor = gramas * 3.50; 

        if(gramas >= 1000){ 
        valor = Math.round(gramas * 3.00); 
        } 
        
        setVlTotal(valor / 100);
           
    }   

    catch(err){
        alert("Deu erro aí felas")
    }
     
}

    return(
        <div className='prova-page'>
            <h1> Cálculo de Açaí </h1>
            <div> Açaí pequeno R$13,50 </div>
            <input type="number" value={pequeno} onChange={e => setPequeno(e.target.value)}/>
            <div> Açaí médio R$15,00 </div>
            <input type="number" value={medio} onChange={e=> setMedio(e.target.value)}/>
            <div> Açaí grande R$17,50 </div>
            <input type="number" value={grande} onChange={e => setGrande(e.target.value)}/>
            <div> Desconto </div>
            <input type='number'value={desconto} onChange={e => setDesconto(e.target.value)} />
            <button onClick={compra}> Comprar </button>
            <div>
                O total da sua compra é R${preco}
            </div>


            <div> 
                 <h2> Signo </h2> 
             <div> 
                 <div>Digite o mês:</div> 
                 <input type="text" value={mes} onChange={e => setMes(e.target.value)}/> 
             </div> 
             <div>   
                 <div>Digite o dia:</div> 
                 <input type="number" value={dia} onChange={e => setDia(e.target.value)}/> 
             </div> 

             </div> 
             <div> 
                 <button onClick={Signo}> Checar Signo Libra </button>  
             </div> 
             <div>  
                {resul === true ? 'O Signo é Libras? é sim' : 'Signo é Libras? Não é não '} 
             </div> 
                
             <h2> Sorveteria</h2> 
                 <div>  
                     <div> Digite o valor em gramas:</div> 
                     <input type="number" value={gramas} onChange={e => setGramas(e.target.value)}/> 
                 <div/> 
                 <div> 
                     <button onClick={sorveteria}> Concluir a sua compra</button> 
                 </div>

                   <div className='Resultado'> 
                       {vlTotal} 
                   </div> 
               </div> 
               
            
        </div>
    )
}