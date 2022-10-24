// const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

// form.addEventListener('submit', event => {
//     event.preventDefault()            //Evitar o reload automatico do submit
    

//     //Obtendo entrada de valores
//     //console.log(usernameInput.value)               //Obtendo o valor digitado por uma seleção externa
//     //console.log(form.username.value)               //Obtendo o valor digitado pelo id/name dentro do form
//     //console.log(event.target.username.value)      //obtendo o valor digitado por dentro do evento, mas usando a referencia do id/name
// })

// const username = 'joaogo'
// const pattern = /^[a-z]{6,}$/            //regex de no minimo 6 caracteres entre 'a' até 'z'


//TEST
//Verifica se uma expressão regular e uma string dao match
// const isAMatch = pattern.test(username)  //metodo para o regex q sempre retorna um boolean

// if(isAMatch) {
//     console.log("O teste da regex passou =)");
// }else {
//     console.log("O teste da regex não passou");
// }


//SEARCH
//metodo de string que faz uma verificação, retorna -1 caso nao ocorra e 0 ou mais caso ocorra
// const result = username.search(pattern)

// console.log(result);


//Form validação basica
const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')
const feedBack = document.querySelector('.feedBack')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)      //Retorna um boolean de validação do username

form.addEventListener('submit', event => {
    event.preventDefault()            

    const username = form.username.value
    const isValidUsername = testUsername(username)

    if(isValidUsername){
        feedBack.innerText = 'username valido =)'
        return
    }

    feedBack.innerText = 'o username deve conter entre 6 e 12 caracteres e apenas letras'
})


//Form validação funcional
form.username.addEventListener('keyup', event => {
    const isAValidUsername = testUsername(event.target.value)
    
    if(isAValidUsername){
        form.username.setAttribute('class', 'success')
        return
    }
    form.username.setAttribute('class', 'error')
})