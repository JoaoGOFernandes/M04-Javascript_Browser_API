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
        // console.log('Clicou na li');

        // clickedElement.style.textDecoration = 'line-through'    //faz o item clickado ficar com uma faixa
        clickedElement.remove()

        //Para o topico de event bubbling
        event.stopPropagation() //impede a propagação do evento
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

//event bubbling e event delegation
//Bubbling: Ao se disparar um evento ela se propaga do filho a té o pai
//Delegation: em vez de adicionar um addEventListenner a cada nó, adicionamos um só no pai
ul.addEventListener('click', event => {
    // console.log(event.target);   //Antes os novos item nao eram mostrados pq nao tinham evento adicionado a eles

    const clickedElement = event.target

    if(clickedElement.tagName ===  'LI'){  //Confere se o q foi clicado é msm um li ou uma borda...
        clickedElement.remove()
    }

    console.log('Clicou na ul'); //é mostrado caso tire o stopPropagation do evento da li, ou somente nos li novos q nao tem evento adicionado
})
