const url = 'https://dog.ceo/api/breeds/image/random'   //Tras uma imagem aleatoria de um cachorro a cada request
const dogImg = document.querySelector('[data-js="dog-img"]')

// console.log(fetch(url));   //Por tras dos panos o metodo fetch é uma promise com estado pendente

// fetch(url)                 //Faz uma requisição http e tras os dados da url que especificamos como argumento
//     .then(dogData => {
//         if(!dogData.ok){   //Propriedade ok retorna um boolean indicando se o http status code da resposta obtida esta entre 200 e 299(bem sucedida)
//             throw new Error(`HTTP error, status ${dogData.status}`)
//         }
//         console.log(dogData);          //A resposta mostrada é um objeto response, que é o retorno de uma operação que envolve api
//         return dogData.json()          //Precisamos passear o texto do body da resposta
//     })
//     .then(({message}) => {             //Recebe o json com a propriedade message que precisamos
//         dogImg.setAttribute('src', message);  //Metodo que recebe o que precisa ser alterado e o valor 
//     })
//     .catch(error => {
//         console.log(error.message); //se der erro no proprio then é especificado uma mensagem de erro que sera recebida como parametro aqui
//     })



//Deixando o codigo mais legivel

const validateHTTPStatus = dogData => {
    if(!dogData.ok){   
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    console.log(dogData);
    return dogData.json()
}

const setDogImg = ({message: url}) => {
    dogImg.setAttribute('src',url)
}

const HandleRequestError = error => {
    console.log(error.message);
}

fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImg)
    .catch(HandleRequestError)