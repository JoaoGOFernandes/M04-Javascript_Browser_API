//PROMISE
//É um objeto que representa o sucesso ou falha de uma operação assincrona

//Um código assincrono pode iniciar um processo agora e finalizar esse processo posteriormente

// let randomNumber = 9;

// setTimeout(() => {
//     randomNumber += 100;
//     console.log(randomNumber);
// }, 2000)

// console.log(randomNumber);
//O codigo é executado de forma sincrona(de cima pra baixo, sequencialmente, passo a passo)
//O time não interfere na leitura das proximas linhas de codigo, por isso o numero 9 é exibido antes
//Quando o processo asincrono do settime é concluido apos 2s a função que ele recebe é executada


//Request são um exemplo de operação assíncrona
//Request são executados em uma thread separada, permitido que o restante do codigo seja processado sem ter que esperar



//Beneficio do uso do promise
//1.Mais controle e legibilidade no fluxo de lógicas assíncronas
//2.Reduz o acoplamento entre funções de callback
//3.Tem mais previsibilidade e detalhamento no tratamento dde erros

//Criando uma promise
const aPromise = new Promise((resolve, reject) => {
    const aNumber = 37
    resolve(aNumber)
})
//Promise é uma função construtora que precisa receber um função como argumento
//resolve e reject são uma converção de uso dos parametros, para designar as funções que são passadas
//Só a invocação do resolve e do reject é suficiente seja retornado e passado um valor sem a necessidade do return

//Consumindo a promise criada
aPromise.then(value => console.log("Log do resolve: " + value))
//Then é o metodo responsavel por receber a resposta de sucesso da promise

aPromise
    .then(value => value)
    .then(value =>console.log("Log do resolve: " + value))
//Os then podem ser encadeados sendo que o then seguinte recebe como parametro o value anterior
//O metodo then sempre retorna uma nova promise por isso pode ser encadeado quantas vezes forem necessarias

const aPromise2 = new Promise((resolve, reject) => {
    const aNumber2 = 37
    reject(aNumber2)
})
console.log(aPromise2);
aPromise2
    .then(value => value)
    .catch(rejectValue =>console.log("Log do reject: " + rejectValue))
//O metodo catch é usado para quando uma resposta obtida da operação, nao seja uma resposta de sucesso
//O catch só vai ser executado se o metodo reject for executado ou quando o codigo dentro de algum then lanca um erro