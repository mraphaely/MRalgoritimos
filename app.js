const pessoa ={
    nome: 'Mary',
    altura: 1.66,
    enderecos:[
        {endereco: 'Rua A',cidade:'Maceió', tipo:"Residencial"},
        {endereco: 'Rua B',cidade:'Arapiraca', tipo:"Comercial"},
        
    ],
    saudacao:()=>`Olá, mundo!`,
};
console.log(pessoa);
console.log(typeof pessoa);
console.log(pessoa.saudacao());
console.log(pessoa.enderecos[0].cidade);
pessoa.enderecos.forEach((endereco)=> console.log(endereco));
