//Selecionadores

//Selecionador de id(getElementByID)
let item1 = document.getElementById('item1')         //id = 'item1'
console.log(item1);
item1.innerText = 'Selecionei e Troquei'   //metodo para alterar o texto

//Selecionador por class(getElementbyClassName)
let item2 = document.getElementsByClassName('item2') //class = 'item2'   
console.log(item2);                       //Aparece um htmlCollection - lista generica de elementos
item2[0].innerText = 'Selecionei e Troquei'
//Obs: Ao contrario de um nodeList não se pode usar forEach em htmlCollection pq ele nao é um Array nem um NodeList

//Selecionador de name(getElementByName)
let item3 = document.getElementsByName('item3')      //name = 'item3'
console.log(item3);
item3[0].innerText = 'Selecionei e Troquei'

//Selecionando de Tag(getElementByTagName)
let p = document.getElementsByTagName('p')           //<p></p>
console.log(p);
p[0].innerText = 'Lista trocada de Itens'


//ATENÇÃO: Para evitar esses htmlCollections usar as querySelector


//Forma mais moderna(querySelector)
//QUERRYSELECTOR
const item1QS_ID = document.querySelector('#item1')     //Detalhes: usa # para id
console.log(item1QS_ID);

const item2QS_Class = document.querySelector('.item2')  //Detalhe: usa . para classe
console.log(item2QS_Class);

const item3QS_Name = document.querySelector('[name]')   //Detalhe: usa [] para classe ou [propriedade="valor"]
console.log(item3QS_Name);

const pQS_TagName = document.querySelector('p')
console.log(pQS_TagName);

//QUERRYSELECTORALL
const items = document.querySelectorAll('li')    //Retorna um nodeList

items.forEach(item => {
    console.log(item);
})


//Obs: Um nodeList é uma lista de nós, similar a um array, mas sem todas os metodos


//PARENTS

//Children - Obtendo o Filho aparti do pai
const article = document.querySelector('article')

console.log(article.children)              //Gera um htmlCollection com os elementos filhos de article
console.log(Array.from(article.children))  //Gera um array baseado no htmlCollection 

//OBS: O htmlCollection não permite forEach por não ser um array

Array.from(article.children).forEach(element => {
    element.classList.add('article-element')
})

//ParentElement - obtendo o Pai aparti do filho
const title = document.querySelector('h2')

console.log(title.parentElement);                  //Pai é o article
console.log(title.parentElement.parentElement);    //"Vô" é o body, que é o pai do article

//NextElementSibling - obtendo o proximo elemento irmão
console.log(title.nextElementSibling);

//PreviousElementSibling - obtendo o elemento irmão anterior
console.log(title.previousElementSibling);