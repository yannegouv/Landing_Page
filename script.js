const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cadastro = {
        nome,
        email,
    }
    let converCadastro = JSON.stringify(cadastro);

    localStorage.setItem('leat',converCadastro)

    let content = document.getElementById('content')

    let carregando = '<p>carregando...</p>'

    let pronto = '<p>pronto</p>'


    content.innerHTML = carregando 

    setTimeout(()=>{
        content.innerHTML = pronto

    },1000)


    
})
