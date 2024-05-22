import data from '../data.json' assert{"type":"json"}
// console.log(data)
const btn = document.getElementById('login')
btn.addEventListener("click", (event) => {
    event.preventDefault()

    const user = document.getElementById('user').value;
    const password = document.getElementById( "password" ).value;

    const login = data.find((obj)=>obj.usuario === user && obj.senha === password)

    if(login){
        window.location = `../pages/login.html${login.html}`
    }else{
        alert('Usuário não encontrado')
    }

    // console.log(login);
    // console.log(data);
    // console.log(user, password);
})
