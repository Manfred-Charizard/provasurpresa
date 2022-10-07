import { useState } from 'react'
import './index.scss'

export default function Index(){

//Açaí
const [pequeno, setPequeno] = useState(0);
const [medio, setMedio] = useState(0);
const [grande, setGrande] = useState(0);
const [desconto, setDesconto] = useState(0)
const [preco, setPreco] = useState(0)

//Função Açaí
function compra(){
    if(pequeno < 0 || medio < 0 || grande < 0 || desconto < 0){
        alert("Insira um valor positivo")
    }

    let total = (pequeno*17.50 + medio*15.00 + grande*17.50)*(desconto/100-1);
    total = Math.abs(total)

    setPreco(total)
}
    return(
        <div>
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
                O total é R${preco}
            </div>


            <h1> Signo </h1>
            
        </div>
    )
}