const avanca =document.querySelectorAll('.btn-proximo')
console.log(avanca)

avanca.forEach(button => {
    button.addEventListener( 'click',function (){
    const atual = document.querySelector ('.ativo')
    const proximoPasso = 'passo-'+ this.getAttribute('data-proxima')  
    console.log(proximoPasso)  
    atual.classList.remove('ativo')
    document.getElementById(proximoPasso).classList.add('ativo')
})

})