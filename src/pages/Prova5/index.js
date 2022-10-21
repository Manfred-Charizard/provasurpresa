import { useState, useEffect } from "react";
import './index.scss';
import { CalcularCafe } from '../../func/index'

export default function Cafe() {
    const [estudante, setEstudante] = useState(0)
    const [recipiente, setRecipiente] = useState(0)
    const [milimetros, setMilimetros] = useState(0)
    const [resposta, setResposta] = useState(0)

    const [entrada, setEntrada] = useState(0)
    const [capital, setCapital] = useState(0)
    const [taxa, setTaxa] = useState(0)
    const [periodo, setPeriodo] = useState(0)
    const [resp, setResp] = useState(0)


    function cafee() {
        try {
            let final = CalcularCafe(estudante, recipiente, milimetros)
            setResposta(final)
        }

        catch (err) {
            setResposta(err.message)
        }
    }

    useEffect(() => {
        cafee()
    }, [estudante, recipiente, milimetros])

    function calcularjuros() {
        let c = capital - entrada;
        let t = taxa / 100;
        let soma = 1 + t;
        let e = Math.pow(soma, periodo);
        let tempo = taxa * 12;
        let semiMontante = c * e;
        let montante = semiMontante;
        let juros = montante - capital;
        let parcela = montante / (tempo);

        setResp(`O montante é igual a ${montante.toFixed(2)}, o juros é ${juros.toFixed(2)} e o valor da parcela fica ${parcela.toFixed(2)}`)

    }

    return (
        <main>
            <h1> Café </h1>

            <div>
                Insira a Quantidade de Estudantes <input type='number' value={estudante} onChange={e => setEstudante(e.target.value)} />
            </div>
            <div>
                Insira a Quantidade de Litros do recipiente <input type='number' value={recipiente} onChange={e => setRecipiente(e.target.value)} />
            </div>
            <div>
                Insira a Quantidade de ml  <input type='number' value={milimetros} onChange={e => setMilimetros(e.target.value)} />
            </div>

            <div>
                {resposta}
            </div>
            <br />
            <div>
                <h1>Juros composto</h1>
                <div>
                    <p>Insira o valor da entrada:</p>
                    <input type='number' value={entrada} onChange={e => setEntrada(e.target.value)} />
                </div>
                <div>
                    <p>Insira o valor do capital:</p>
                    <input type='number' value={capital} onChange={e => setCapital(e.target.value)} />
                </div>
                <div>
                    <p>Insira o valor da taxa:</p>
                    <input type='number' value={taxa} onChange={e => setTaxa(e.target.value)} />
                </div>
                <div>
                    <p>Informe o periodo</p>
                    <input type='number' value={periodo} onChange={e => setPeriodo(e.target.value)} />
                </div>
                </div>
                    <button onClick={calcularjuros}> calcular </button>
                <div>
                <div>
                    {resp}
                </div>
            </div>
        </main>
    )

}