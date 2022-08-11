
function getUsers(){
    axios.get("http://localhost:3000/users")
        .then(response=>{
            const usuarios = response.data
            usuarios.map(user=>{
                var p = document.createElement("p");
                document.body.appendChild(p).innerText = user.name;
                
                console.log(user)
            })
            //console.log(response.data)
            //resultado.textContent = JSON.stringify(response.data) 
            //autor.textContent = response.data.login;
            //avatarUrl.src = response.data.avatar_url

        })
}
getUsers()