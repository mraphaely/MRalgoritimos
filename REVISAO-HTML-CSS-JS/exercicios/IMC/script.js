
function calculo(){
    
    const valor01 = document.getElementById("valor01");
    const valor02 = document.getElementById("valor02");

    const altura = Number(valor01.value)
    const peso = Number(valor02.value)

    if(isNaN(altura) || isNaN(peso)){
        document.getElementById("resultado").innerText = "Insira valores válidos.";
    }

    const imc = peso / (altura * altura)

    let resultado = " resultado: "+ imc.toFixed(2)

    if(imc < 16.9){
        resultado += " Muito abaixo do peso";
    }else if(imc >=17 && imc <= 18.4){
        resultado += " Abaixo do peso";

    }else if(imc >=18.5 && imc<=24.9){
        resultado += " Peso normal";

    }else if(imc >=25 && imc<=29.9){
        resultado += " Acima do peso";

    }else if(imc >=30 && imc<=34.9){
        resultado += " Obesidade grau I";

    }else if(imc >=35 && imc<=40){
        resultado += " Obesidade grau II";

    }else if(imc >= 40){
        resultado += " Obesidade grau III";
    }

    document.getElementById("resultado").innerText = resultado;

}
