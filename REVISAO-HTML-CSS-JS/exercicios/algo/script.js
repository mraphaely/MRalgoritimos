function Soma(){

    const valor01 = document.getElementById("valor01");
    const valor02 = document.getElementById("valor02");

    const Numero01 = Number(valor01.value)
    const Numero02 = Number(valor02.value)
    
    const Soma = Numero01 + Numero02
    
    document.getElementById("resultado").innerText = " resultado: "+ Soma
}
