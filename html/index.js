function getRaiz(){
    axios.get("http://localhost:3000/")
        .then(response=>{
            console.log(response.data)
            //resultado.textContent = JSON.stringify(response.data) 
            //autor.textContent = response.data.login;
            //avatarUrl.src = response.data.avatar_url

        })
}
getRaiz()