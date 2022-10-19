import { useState } from "react";
import './index.scss';



export default function Index() {
    //orçamento familiar
    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [resposta, setResposta] = useState("");

    //ingresso
    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diasemana, setDiasemana] = useState("");
    const [nacional, setNacional] = useState(true);
    const [total, setTotal] = useState(0)

    function calculOrcamento() {
        let a = ganhos - gastos;
        let b = ganhos / 100;
        let c = a / b;
        let total = 100 - c;
        let msg = "";

        if (gastos > ganhos) {
            msg = "Orçamento comprometido! Hora de rever seus gastos";
            setResposta(msg);
        }
        else if (total < 20) {
            msg = "Parabéns, está gerenciando bem o seu orçamento";
            setResposta(msg);
        }
        else if (total >= 21 && total <= 50) {
            msg = "Muito bem, seus gastos não ultrapassam metade dos ganhos";
            setResposta(msg);
        }

        else if (total >= 51 && total <= 80) {
            msg = "Atenção, melhor conter os gastos"
            setResposta(msg);
        }

        else if (total >= 81 && total <= 100) {
            msg = "Cuidado, seu orçamento pode ficar comprometido!";
            setResposta(msg);
        }


    }


    function IngressosCinema() {
        let total = 0;


        if (diasemana === "quarta-feira" || nacional === false) {
            total = (inteiras + meias) * 14.25;
        }

        else if (diasemana != "quarta-feira" || nacional === true) {
            total = (inteiras + meias) * 5.00;
        }


        else if (nacional == true && diasemana === "quarta-feira") {
            total = (inteiras + meias) * 28.50;
        }

        else {
            setTotal(0)
        }

        setTotal(total);
    }

    return (
        <div className='prova-page'>
            <h1> Orçamento Familiar</h1>

            <div>
                <label> Qual os ganhos:</label>
                <input type="number" value={ganhos} onChange={e => setGanhos(e.target.value)} />
            </div>
            <br />

            <div>
                <label> Qual os seus gastos:</label>
                <input type="number" value={gastos} onChange={e => setGastos(e.target.value)} />
            </div>

            <button onClick={calculOrcamento}> Calcular</button>

            <div className='Resultado'>
                {resposta}
            </div>
            <br />

            <h1>Comprar ingresso</h1>

            <div>
                <label>Quantidade de inteiras:</label>
                <input type="number" value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />
            </div>

            <br />

            <div>
                <label> Quantidade de meias: </label>
                <input type="number" value={meias} onChange={e => setMeias(Number(e.target.value))} />
            </div>
            <br />

            <div>
                <label> Dia da semana: </label>
                <input type="text" value={diasemana} onChange={e => setDiasemana(e.target.value)} />
            </div>

            <div>
                <label> O filme é nacional?: </label>
                <input type="checkbox" checked={nacional} onChange={e => setNacional(e.target.checked)} />
            </div>
            <button onClick={IngressosCinema}> calcular </button>
            <div>
                {total}
            </div>
        </div>
    )
}