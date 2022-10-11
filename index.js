
    function Paradas(capacidade, consumo, distancia){
        let x = capacidade * consumo;
        let y = distancia / x;

        return Math.ceil(y)
    }
   


let x = Paradas(50.0,10.0,400.0);
console.log (x);