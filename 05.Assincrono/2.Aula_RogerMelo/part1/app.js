//Código Assincrono
//Execução de operações que levam um certo tempo para serem concluidos
//É um código que inicia um processo agora e finaliza esse processo posteriormente

//Linguagem sincrona: executa uma instrução por vez, de cima para baixo
//Single Thread: as operações sao executadas de forma sequencial, uma de cada vez

//Exemplo 1

console.log(1);
console.log(2);
console.log(3);
console.log(4);
//Cada execução é realizada de cada vez, uma após a outra


//Exemplo 2

console.log('a');
setTimeout(()=>{
    console.log("Função de callback executada");
},2000)
//Simula o tempo que uma requisição leva para obter os dados do bd ou api
console.log('b');
console.log('c');
console.log('d');
//setTimeout é uma operação assincrona, não é um código bloqueante


//REQUEST HTTP
//São usadas para se convecter a API ou Banco de dados

//API: Interface de aplicação de programação, uma aplicação usa as funcionalidade de um outro sistema
//Request: Solicitação de informação
//HTTP: Hypertext Transfer Protocol, um protocolo para comunicação
//Endpointer: URL que a api ou serviço disponibiliza para usar e obter informações que o servidor armazenam, cada api vai ter um conjunto de api disponibilizada
//Response: informações que a api disponibiliza como resposta a requisição, geralmente em JSON
//JSON: Notação de Objeto JavaScript, se parece um objeto em JS

const request = new XMLHttpRequest()
//Objeto de request
//Antes do JSON se tornar padrão o XML era usado
//Hoje em dia o XML pode ser usado para qualquer tipo de dado(xml json e Plaintext)

request.open("GET","https://jsonplaceholder.typicode.com/todos")
//Recebe dois paramatros : 1ºstring como metodo de request http a se fazer | 2ºEndpoint que sera requisitadp ára obter os dados esperados
//só foi aberto a requisição, ainda não está sendo feita

request.addEventListener('readystatechange', () => {
    console.log(request.readyState);   //Retorna o estado atual da requisição
})
//Para saber se vai ser obtido resposta
//READYSTATE: 0(Foi criado a requisição mas nao foi enviado)
//            1(Open() foi chamado)
//            2(send() foi chamado e header e status foram recebido )
//            3(Download dos dados)
//            4(Operação tá completa)
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);   
        console.log(request.status);   
    }
})
//State x Status: O status existe pq, msm acontecendo um erro no endpoint, o request vai cumprir todos os states, sendo necessario outra forma de analisar

request.send()
//Envia de fato todo o request construido


// console.log(request);      //Mostra varias propriedades associadas

