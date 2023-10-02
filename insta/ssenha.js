const senha = document.querySelector('#senha')
const mostrar = document.querySelector('#mostrar')
var teste = 1



mostrar.onclick = () =>
{
    if (senha.type === 'password'){
        senha.type = 'text'
         mostrar.innerHTML = 'Ocultar'
    }
    else{
        senha.type = 'password'
       mostrar.innerHTML = 'Mostrar'
    }
}



