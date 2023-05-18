const form = document.getElementById('novoItem');

form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === nome.value)
    const itemAtual = {
        "nome": nome.value, 
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        console.log(existe.id)

        atualizaElemento(itemAtual)
        itens[existe.id] = itemAtual
    }else{
        itemAtual.id = itens.length
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }
    
    localStorage.setItem("itens", JSON.stringify(itens))//metodo stringfy json só guarda string no
    //localStorage.clear(itens) para apagar o localStorage
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
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    document.querySelector("[data-id= '"+item.id+"']").innerHTML = item.quantidade
}