const form = document.getElementById('novoItem');
form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    //console.log(evento.target[0].value) //essa não é a melhor forma de pesquisar, caso adicione mais item o arrey para de funcionar
    //console.log(evento);    //informa tudo o que aconteceu no console

    /* console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value) */
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

const lista = document.getElementById("lista")


function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
}