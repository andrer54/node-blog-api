const url = "http://localhost:3000/newuser"
function addUser(newUser){
    axios.post(url, newUser)
    .then(response=>console.log(response))
}


function createUser(){
    //EVITAR QUE O FORMULÁRIO SEJA SUBMETIDO ANTES DO ENVIO PARA A API
	event.preventDefault();
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    console.log(nome)
    console.log(email)

    let newUser = {
        name: nome,
        email: email,
    }

    addUser(newUser)
}
