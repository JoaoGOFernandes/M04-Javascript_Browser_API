//PROMISSES
//Objeto que representa o successo ou a falha de uma operação assincrona
//Uma promisse sempre vai ter dois resultados possiveis
//Resolve: os dados que eu queria foram obtidos
//Reject: os dados que eu queria foram rejeitados


const getData = () => {
    return new Promise((resolve, reject)=>{
        // resolve('Dados aqui')
        reject('Erro aqui')
    })
    //Função construtora para criar uma promisse, recebe uma função como parametro
}

// console.log(getData())
//Retorna um estado fulfilled que diz que a operação foi realizada com sucesso

// getData()
//     .then((value)=>{console.log(value)})
//     .catch((err)=>{console.log(err)})
//Then é um metodo responsavel por receber a mensagem de sucesso da promisse
//Por padrão o valor recebido como value é o valor passado no argumento do resolve

//O catch é responsavel pelo que vai acontecer quando o resultado da operação nao for uma operação de sucesso
//O catch só vai ser invocado em duas situações
//1º: Quando o reject for invocado
//2º: Quando ocorrer algum erro no codigo dentro do then


//Exemplo de uso de promisse
const getTodos = url => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequestNotOk = request.readyState===4
    
        if (isRequestOk) {
            const data = JSON.parse(request.responseText)
            resolve(data)
        }
    
        if(isRequestNotOk){
            reject('Não foi possivel obter os dados')
        }
    })

    request.open('GET', url)
    request.send()
})

getTodos('https://pokeapi.co/api/v2/pokemon/1')
    .then(pokemon => console.log(pokemon))
    .catch(err => console.log(err))

//Nesse caso temos um unico request para um unico pokemon

//REQUISIÇÕES SEQUECIAIS
getTodos('https://pokeapi.co/api/v2/pokemon/2')
    .then(bulbasaur => {
        console.log(bulbasaur)
        return getTodos('https://pokeapi.co/api/v2/pokemon/4')
    })
    .then(charmander => {
        console.log(charmander)
        return getTodos('https://pokeapi.co/api/v2/pokemon/7')
    })
    .then(console.log)
    .catch(err => console.log(err))
//É realizado request sequencias para cada pokemon imprimindo o valor da promisse retornado
//O catch é aplicado caso tenha algum erro na requisição ou em qualquer um dos then

