const form = document.getElementById('novoItem');
form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    //console.log(evento.target[0].value) //essa não é a melhor forma de pesquisar, caso adicione mais item o arrey para de funcionar
    //console.log(evento);    //informa tudo o que aconteceu no console

    /* console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value) */
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})

const lista = document.getElementById("lista")
const itens = [
    
]

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }
    itens.push(itemAtual)
    localStorage.setItem("item", JSON.stringify(itens))//metodo stringfy json só guarda string no
}