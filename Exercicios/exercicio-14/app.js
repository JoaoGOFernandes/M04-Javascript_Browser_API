/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/


const getPokemon = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequestNotOK = request.readyState === 200
    
    if(isRequestOK){
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }
    if(isRequestNotOK){
      callback('Não foi possível obter o Pokémon', null)
    }
  })

  request.open('GET', url)
  request.send()
}

const logPokemonDate = (error, data) =>  error 
?  console.log(error) 
: console.log(`Pokémon obtido: ${data.name}`)

const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const bulbasaur = getPokemonUrl(1)
const charmander = getPokemonUrl(4)
const squirtle = getPokemonUrl(7)

getPokemon(bulbasaur, (error, data)=>{ 
  logPokemonDate(error, data)
  getPokemon(charmander, (error, data)=>{
    logPokemonDate(error, data)
    getPokemon(squirtle, (error, data)=>{
      logPokemonDate(error, data)
    })
  })
})

// const getPokemon = (url, callback) => {
//   const request = new XMLHttpRequest()

//   //Traqueando o progresso da requisição(Saber se a resposta foi obtida)
//   request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200){
//       const data = JSON.parse(request.responseText)
//       callback(null, data)
//       return
//     }
//     if(request.readyState === 200){
//       callback('Não foi possível obter o Pokémon', null)
//     }
//   })
//   //Traqueando o progresso da requisição(Saber se a resposta foi obtida)

//   request.open('GET', url)
//   request.send()
// }

// const logPokemonDate = (error, data) => {   //Contribui para a execução de requisições uma após a outra pq o return nao interfere, por estar em uma função isolada
//   if (error) {
//     console.log(error);
//     return
//   }  
//   console.log(`Pokémon obtido: ${data.name}`);
// }

// getPokemon(bulbasaur, (error, data)=>{ //Isso é feito para que as requisições sejao sequenciais e nao paralelas
//   logPokemonDate(error, data)
//   getPokemon(charmander, (error, data)=>{
//     logPokemonDate(error, data)
//     getPokemon(squirtle, (error, data)=>{
//       logPokemonDate(error, data)
//     })
//   })
// })






// const bulbasaur = 'https://pokeapi.co/api/v2/pokemon/1'
// const charmander = 'https://pokeapi.co/api/v2/pokemon/4'
// const squirtle = 'https://pokeapi.co/api/v2/pokemon/7'


// const getPokemon = (url, callback) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200){
//       const data = JSON.parse(request.responseText)
//       callback(null, data)
//       return
//     }

//     if(request.readyState === 4){
//       callback("Não foi possivel obter o pokemon" ,null)
//     }
//   })

//   request.open('GET', url)
//   request.send()
// }

// getPokemon (bulbasaur, (error, data)=>{
//   if (error) {
//     console.log(error);
//     return
//   }
//   console.log(`Pokémon obtido: ${data.name}`);

//   getPokemon(charmander ,(error, data)=>{  //Pra esse caso, se a primeira requisição falhar o return dela impedirá de fazer esta requsição seguinte
//         console.log(error);
//   })
// })



/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
  
  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/

const map = (array, func) => {
  let newArray = []
  const addNewItemToNewArray = item => {
    const newItem = func(item)
    newArray.push(newItem)
  }
  array.forEach(addNewItemToNewArray)
  return newArray
}

console.log(map([1,2,3], number => number * 2));
console.log(map([1,2,3], number => number * 10));

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

// const person = {
//     name: 'Roger',
//     getName: () => this.name
//   }
//Esse this referencia o window, por conta do arrow function que por sua vez nao tem um this proprio
  
const person = {
    name: 'Roger',
    getName: function() {
      return this.name
    }
  }
  console.log(person.getName())
  
  /*
    04
  
    - Descomente a 2ª const abaixo e salve este arquivo;
    - Um erro será exibido no console;
    - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
      delas.
  */
  
  // const x = 'x'
  // const x = 'y'
  //Erro só acontece por conta de ter duas declarações igual no mesmo escopo
  
  const x = 'x'

  const getX = () => {
    const x = 'y'
    return x
  }

  console.log(x, getX());



  /*
    05
  
    - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
      conseguir.
  */
  
  // const getFullName = (user) => {
  //   const firstName = user.firstName
  //   const lastName = user.lastName
  
  //   return `${firstName} ${lastName}`
  // }
  
  // console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))

  const getFullName = ({firstName, lastName}) => `${firstName} ${lastName}`
  
  console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))
  
  /*
    06
  
    - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
      parâmetro. Exemplo: 'red';
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
      equivalente hexadecimal (pode ser qualquer tom);
    - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
      retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
      a mensagem 'Não temos o equivalente hexadecimal para COR';
    - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
  */

    const convetToHex = color => {
      const colors = {
        red: '#A31419',
        green: '#10A337',
        blue: '#4C91F0',
        yellow: '#F0EA6F',
        purple: '#8132A3'
      }
      return colors[color] 
        ? `O hexadecimal para a cor ${color} é ${colors[color]}`
        : `Não temos o equivalente hexadecimal para ${color}`
    }

    const colors = ['blue', 'black', 'red', 'green', 'pink', 'yellow', 'purple', 'brown']

    const logColorMessage = color => console.log(convetToHex(color))
    colors.forEach(logColorMessage)
    // console.log(convetToHex('blue'))
    // console.log(convetToHex('black'))

  /*
    07
  
    - Através do array abaixo, gere um objeto com a frequência de idades das 
      pessoas;
    - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
      uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
      o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
      diante.
    
    Resultado desejado: { 18: 3, 19: 2, 20: 1 }
  
    Dica: pesquise por Computed Property Names.
  */
  
  const people = [
    { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
    { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
    { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
    { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
    { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
    { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
  ]

// const agesFrequency = people.reduce((acc, person)=>{
//   acc[person.age] = acc[person.age] + 1 || 1 //Cuito circuito para quando der NaN devido ao fato de na primeira iteração de uma nova propiedade a expressão a direita retorna undefined
//   return acc
// }, {})

const createOrIncrementAgeFrequency = (acc, {age})=>{
  acc[age] = acc[age] + 1 || 1 
  return acc
}

const agesFrequency = people.reduce(createOrIncrementAgeFrequency, {})
console.log(agesFrequency);