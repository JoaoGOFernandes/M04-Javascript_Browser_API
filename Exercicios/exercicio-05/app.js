/*
  01
  - No envio do form, faça com que a página não seja recarregada.
*/
  // const form = document.querySelector('form')

  // form.addEventListener('submit', event => {
  //   event.preventDefault()
  // })

/*
  02
  - No envio do form obtenha, através do objeto event, o texto inserido no  
    input e exiba-o no console.
*/
  // const form = document.querySelector('form')

  // form.addEventListener('submit', event => {
  //   console.log(form.input.value)
  //   event.preventDefault()
  // })

/*
  03
  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do  
    index.html;
  - Exiba no console o boolean no qual este teste resulta.
*/
  const p = document.querySelector('p')

  const textInHTML = p.textContent
  const regexDocumentation = /documentation/ 

  const result = regexDocumentation.test(textInHTML)
  console.log(result)

/*
  04
  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;
  - A regex não deve conter (literalmente) os caracteres B99;
  - Teste se o match aconteceu e exiba o resultado no console.
*/
const B99Regex = /[A-Z0-9]{3}/

const B99message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'

console.log(B99Regex.test(B99message));

/*
  05
  - Modifique (manualmente) o valor que a const word armazena para que o  
    resultado do teste entre a regex e a string exibido no console seja true.
*/

// const word = 'O que a NASA fotografou no dia do seu aniversário?'
const word = 'NASA'
const NASARegex = /^[A-Z]{4}$/
const NASAResult = NASARegex.test(word)

console.log(NASAResult)

/*
  06
  - No envio do form, se o valor inserido no input conter, no mínimo, 7  
    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem
    "O valor inserido no input é válido =)";
  - Caso contrário, exiba "Valor inválido =(" no console.
  
  Exemplos:
    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;
    - "jozeti" não é um valor válido, pois contém 6 caracteres.
*/
const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const input = event.target.input
    const inputRegex = /^.{7,}$/

    const isAMatchInput = inputRegex.test(input.value)

    if(isAMatchInput) {
      console.log("O valor inserido no input é válido =)");
      input.value = ""
      input.focus()
      return
    }

    console.log("Valor inválido =(");
    input.value = ""
    input.focus()
  })

 
/*
  07
  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 
    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  
    ou minúsculas e números serão permitidos.
  Exemplos:
    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;
    - "eich_1961" não é um valor válido, pois contém um caractere especial.
*/

  const newRegexInput = /^[a-zA-Z0-9]{7,11}$/