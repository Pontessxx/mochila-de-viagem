const form = document.getElementById('novoItem');

form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemAtual = {
        "nome": nome.value, 
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)
    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))//metodo stringfy json só guarda string no

    nome.value = ""
    quantidade.value = ""
})

const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [] // true or false ....
//console.log(itens)

itens.forEach((elemento)=>{
    criaElemento(elemento)
})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)

    
}