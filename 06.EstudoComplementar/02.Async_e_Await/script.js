//Asinc/Await
//Permite que seja escrito codigo baseado em promise como se fosse sincrono
//de forma mais confortave e legivel

const exemplo = async () => {
    return 'oi'
}

//Toda função asyn retorna uma promisse
console.log("Retorno de uma função assincrona");
console.log(exemplo());

console.log("Retornando o valor da função assincrona");
exemplo().then(value => console.log(value))


const page = 1;
const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=5&_page=${page}`)   //Recebe o valor resolvido da promisse
    const data = await response.json()                                                                 //response.json resulta em uma promisse por isso usa o  wait
    console.log(data);
}
//Await só pode ser usado dentro de uma função async
//A execução do fetch sera executada e realizara a requisição
//O away faz com que enquanto a requisição do fetch não chegar, os codigos abaixo do await nao sera executado
//O uso o async/await elimina o uso do encadeamento de then e catch 

getPosts()



const url ="https://jsonplaceholder.typicode.com/users"

//Async é usada antes da declaração de uma função, indicando que a função é assincrona
const getUsers = async () => {
    const usersData = await fetch(url)
    console.log(usersData);
}
//Com async/Await podemos lidar com uma requisição sem se preocupar com then/catch funções de calback