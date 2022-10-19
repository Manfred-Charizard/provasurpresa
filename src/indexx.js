function Formas(b, a){
    const y=[];
    const w=[];

    for(let z = 1; z <= b; z++){
        y[z] = '* ';
    }
    for(let x = 1; x <= a; x++){
        w[x] = y;
    }

    return w;

}

let v = Formas(2, 5);
console.log(v);
