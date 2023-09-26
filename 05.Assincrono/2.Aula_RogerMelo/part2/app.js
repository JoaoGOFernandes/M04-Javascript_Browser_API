
const getTodos = (url,callback) => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
    
        const isRequestOk = request.readyState === 4 && request.status === 200
        const isRequestNotOk = request.readyState===4
    
    
        if (isRequestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, data)
            return
        }
    
        if(isRequestNotOk){
            callback('Não foi possivel obter os dados', null)
        }
    })

    request.open('GET', url)
    request.send()
}
//Uma especie de request reutilizavel

// getTodos((error, data) => {     //OS parametros passados para a função callback dão mais versatilidade para o codigo
//     console.log('Callback executado');

//     if (error) {
//         console.log(error);
//         return
//     }
//     console.log(data);
// })
//Os parametros da callback são passados tanto pro caso da função ser bem sucedida como caso ela dê errado
//Deu certo:  error = null, e data = resposta
//Nao deu: error = messagem, data = null
//código assincrono nao brocante

getTodos('./json/todo.json',(error, data) => { 
    console.log(data);
    getTodos('./json/todo-02.json', (error, data)=>{
        console.log(data);
        getTodos('./json/todo-03.json', (error, data)=>{
            console.log(data);
        })
    })
})
//Essa estrutura aninhada é conhecida por "callback hell" ou também por Piramyd of Dom
//Ilegiveis e dificil de dar manutenção