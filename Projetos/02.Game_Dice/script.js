
const score0El = document.querySelector('#score--0')  //Seleciona a soma dos dados do player 1 
const score1El = document.getElementById('score--1')  //Seleciona a soma dos dados do player 2
//Mesma ideia do querySelector, mas especifico para id

const diceEl = document.querySelector('.dice');       //Seleciona a imagem do dado

//Seletores para os botoes
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')   //Seleciona o borão de Rola o dado
const btnHold = document.querySelector('.btn--hold')

//Seletores para os valores dos players
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

//Iniciando com valor zero a soma dos dados
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')
let currentScore = 0;

//Adicionando uma lista de evento para o botao de jogar 

btnRoll.addEventListener('click', function() {
    //1. Gerar um numero randomico para o dado
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    //2. Mostrar o dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`

    //3. Check se o numero e 1, se for muda para o proximo player
    if(dice !== 1){
        currentScore += dice
        current0El.textContent = currentScore
    }
    
})

// btnRoll.addEventListener('click', function() {
//         
//         const dice = Math.trunc(Math.random() * 6) + 1;
//         console.log(dice);

//         //2. Mostrar o dado
//         diceEl.classList.remove('hidden');
//         diceEl.src = `dice-${dice}.png`

//     })