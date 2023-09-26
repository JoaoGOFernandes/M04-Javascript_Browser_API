//Local Storage
//Relativo ao dados que são armazenados localmente no navegador
//Tem um limite de armazenamento de 5mb

//Metodos disponiveis
// .getItem(chave)
// .setItem(chave, valor)
// .removeItem()

// localStorage.setItem("nome","João Gabriel")

// const nome = localStorage.getItem("nome")
// console.log(nome);

//Uma forma mais semantica de fazer isso é usando funções
const buscarDadosDosStorage = (storageName) => {     //É basicamente um apelido para o getItem
    return JSON.parse(localStorage.getItem(storageName))
}

const salvarDadosNosStorage = (storageName, dados) => {
    localStorage.setItem(storageName, dados)
}

const removerDadosStorage = (storageName) => {
    localStorage.removeItem(storageName)
}

removerDadosStorage("nome")
salvarDadosNosStorage("nome", "João Gabriel")

const adicionarArrayAoStorage = (storageName, novosItems) => {
    const dadosAtuais = buscarDadosDosStorage(storageName) || []
    const novaLista = novosItems.concat(dadosAtuais)

    salvarDadosNosStorage(storageName, novaLista)
} 
console.log(buscarDadosDosStorage("nome"));