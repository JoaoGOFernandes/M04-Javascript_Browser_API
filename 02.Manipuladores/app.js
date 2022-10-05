 //InnerText - exibe texto visivel

 const paragraph = document.querySelector('p')

 paragraph.innerText = "Mensagem modificada"  //Seta um novo texto para o elemento
 paragraph.innerText += " e incrementada"     //Concatena os valor ao texto
 console.log(paragraph.innerText);            //Exibe só o texto do elemento selecionado

 const paragraphs = document.querySelectorAll('p')
 console.log(paragraphs);

 paragraphs.forEach( (paragraph, index) => {
    paragraph.innerText += ` + Parte texto ${index + 1} `
 })
 //OBS: Diferentemente o textContent que mostra tudo do texto, o InnerHtml só mostra o q esta visivel(diferente de display:none;)


 //InnerHtml

 const div = document.querySelector('.content')

 //div.innerHTML = '<h2>Substituidor</h2>' //Sobrescreve o valor inicial da tag
 div.innerHTML += '<h2>Novo h2</h2>'        //Concatena um novo valor ao html
 console.log(div.innerHTML)                 //Exibe o html dentro da tag 


 //OBS: Essas propriedades são tando getters como Setters   


 //GetAttribute

 const link = document.querySelector('a')
 
 console.log( link.getAttribute("href"));          //Pega o conteudo do atributo href
 link.setAttribute('href', 'https://www.linkedin.com/in/joao-g-fernandes/')         //Seta o conteudo presente no atributo href


 //SetAttribute

 const status1 = document.querySelector('.error')

 status1.setAttribute('class', 'success')            //muda o atributo class="error", para class="success"
 
 status1.setAttribute('style', 'color: green;')      //Adiciona um style(q nao tinha) com a cor green
 console.log(status1);

//OBS: A desvantagem do setAttribute para style é que ele sobrescreve o estilo anterior


//Metodo style

console.log(status1.style)          //Exibe um objeto com todos o atributos disponiveis para o elemento
console.log(status1.style.color)    //Exibe o valor do atributo chamado
status1.style.margin = '50px'       //Como não existe será adcionado ao elemento
status1.style.fontSize = '50px'     //Para propriedades com hifen(-) usar camel case
status1.style.fontSize = ''           //Remove o estilo


//ClassList

const status2 = document.querySelector('.estilizacao')

console.log(status2.classList);           //Mostra um DomTokenList com as classes q esse elemento tem

status2.classList.add('error')            //Adiciona a classe de estilização error ao elemento informado
status2.classList.remove('estilizacao')   //remove a classe do elemento informado

console.log(status2.classList);

status2.classList.toggle('bigMistake')   //Caso não tenha a classe ele adiciona caso tenha ele retira
console.log(status2.classList);

