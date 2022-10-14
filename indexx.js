function IngressosCinema(inteiras, meias, nacional, dia){
    let total = 0;


    if(dia === "quarta-feira"){
        total = (inteiras + meias)*14.25;      
    }

    else if(nacional === true){
        total = (inteiras + meias) * 5.00;
    }

    else if(nacional == false){
        total = (inteiras + meias ) * 28.50;
    }

    else {
        total = 0
    }

    return total;
}

let x = IngressosCinema(1, 2, true, "quarta-feira")
console.log(x)