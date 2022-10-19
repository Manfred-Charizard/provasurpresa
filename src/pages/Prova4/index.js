import { useState } from "react";
import './index.scss';
import '../../../public/images/f1.png';


export default function Index() {
    //função contar
    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');
    const [resp, setResp] = useState([]);
    const [Nlinha, setNlinha] = useState('');
    const [R, setR] = useState('');
    const [colunas, setColunas] = useState('');
    const [linhas, setLinhas] = useState('');
    const [respo, setRespo] = useState([]);
    const [linha, setLinha] = useState('');
    const [coluna, setColuna] = useState('');
    const [resposta, setResposta] = useState([]);
    const [colun, setColun] = useState('');
    const [linh, setLinh] = useState('');
    const [respos, setRespos] = useState([]);
    const [lin, setLin] = useState('');
    const [colu, setColu] = useState('');
    const [img, setImg] = useState();
    const [respost, setRespost] = useState([]);
    

    function Contar(inicio, final) {
        let z = 0;
        const y = [];
        for (let x = inicio; x <= final; x++) {
            y[z] = x;
            z++;
        }
        return y;
    }


    async function aooa() {
        let a = Contar(inicio, final)
        setResp(a);

    }

    function Linha(t) {
        const y = [];
        for (let x = 1; x <= t; x++) {
            y[x] = "* ";
        }
        return y;
    }

    async function ver() {
        let x = Linha(Nlinha)
        setR(x)
    }

    function retangulo() {
        const y = [];
        const w = [];

        for (let z = 1; z <= colunas; z++) {
            y[z] = '* ';
        }
        for (let x = 1; x <= linhas; x++) {
            w[x] = y;
        }

        return w;


    }

    async function verificar() {
        let x = retangulo(colunas, linhas)
        setRespo(x);
    }

    function circulo() {
        const y = [];
        const w = [];

        for (let z = 1; z <= coluna; z++) {
            y[z] = 'o ';
        }
        for (let x = 1; x <= linha; x++) {
            w[x] = y;
        }

        return w;


    }

    async function verificar() {
        let x = circulo(coluna, linha)
        setResposta(x);
    }

    function quadrado() {
        const y = [];
        const w = [];

        for (let z = 1; z <= colun; z++) {
            y[z] = '▀ ';
        }
        for (let x = 1; x <= linh; x++) {
            w[x] = y;
        }

        return w;


    }

    async function verificar() {
        let x = quadrado(colun, linh)
        setRespos(x);
    }


    function imagem() {
        const y = [];
        const w = [];

        for (let z = 1; z <= colu; z++) {
            y[z] = img;
        }

        for (let x = 1; x <= lin; x++) {
            w[x] = y;
        }

        return w;


    }

    async function verificar() {
        let x = imagem(colu, lin)
        setRespost(x);
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
                    <input type='number' value={Nlinha} onChange={e => setNlinha(e.target.value)} />
                </div>
                <button onClick={ver}>Criar</button>
                <div>
                    {R}
                </div>
            </div>

            <h1> Fazer retangulo </h1>
            <label> Asterísco </label>
            <input type="number" value={colunas} onChange={e => setColunas(e.target.value)} />
            <div>
                <input type="number" value={linhas} onChange={e => setLinhas(e.target.value)} />
            </div>
            <button onClick={verificar}> SÓ VAI </button>
            <div className="pa">
                {respo.map(respo => <div>{respo}</div>)}
            </div>
            <hr />
            <label> Círculo </label>
            <input type="number" value={coluna} onChange={e => setColuna(e.target.value)} />
            <div>
                <input type="number" value={linha} onChange={e => setLinha(e.target.value)} />
            </div>
            <button onClick={verificar}> SÓ VAI </button>
            <div className="pa">
                {resposta.map(resposta => <div>{resposta}</div>)}
            </div>

            <hr />

            <label> Quadrado </label>
            <input type="number" value={colun} onChange={e => setColun(e.target.value)} />
            <div>
                <input type="number" value={linh} onChange={e => setLinh(e.target.value)} />
            </div>
            <button onClick={verificar}> SÓ VAI </button>
            <div className="pa">
                {respos.map(respos => <div>{respos}</div>)}
            </div>

            <hr />

            <label> Imagem </label>
            <input type="number" value={colu} onChange={e => setColu(e.target.value)} />
            <div>
                <input type="number" value={lin} onChange={e => setLin(e.target.value)} />
            </div>
            <img src=""
            <button onClick={verificar}> SÓ VAI </button>
            <div className="pa">
                {respost.map(respost => <div> {respost} </div>)}
            </div>
        </div>

    )

}