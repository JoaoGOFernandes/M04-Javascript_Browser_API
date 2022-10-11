//REMOVE - remove elemento do DOM


const ul = document.querySelector('ul')

// // ul.remove()




//ADDEVENTLISTENER - executa uma ação para uma dada interação


const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('Clicou no botão');
// })         
//Recebe dois argumentos
//1º - tipo de eventos
//2º - função de callback para decidir o que sera feito aparti do evento

const lis = document.querySelectorAll('li')

lis.forEach(li =>{
    li.addEventListener('click', event => {
        const clickedElement = event.target

        // clickedElement.style.textDecoration = 'line-through'    //faz o item clickado ficar com uma faixa
        clickedElement.remove()
    })
})
//event refere-se as informações da interação que aconteceu
//targget é um metodo que armazena a referencia do elemento que o evento ocorreu

//Adicionando um novo li ao clicar no botão
// button.addEventListener('click', () =>{
//     ul.innerHTML += '<li>Novo item</li>'
// })



//APPEND e PREPAND
//Outra forma de adicionar um elemento na DOM usando 
button.addEventListener('click',()=>{
    const li = document.createElement('li')          //Cria um elemento do tipo q especificarmos
    li.textContent = "Novo Item"

    ul.append(li) //Insere no elemento pai o item que passamos na ultima posição
    //ul.prepend(li) //Insere no elemento pai o item que passamos na primeira posição

})