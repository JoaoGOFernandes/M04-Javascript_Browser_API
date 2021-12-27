
// console.log(document.querySelector(".message").textContent);


//Selecionar e manupular elementos html

// document.querySelector('.message').textContent = "Numero Correto"    //Altera o texto do h1 message
// document.querySelector('.number').textContent = 13                   //Altera o texto da div number
// document.querySelector('.score').textContent = 10                    //Altera o texto do p socre

// document.querySelector(".guess").value = 23                          //Altera o valor default do botão input guess



//Lidar com eventos clicks
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1; //Gera um numero de 1-20
let highScore = 0;
console.log(secretNumber);


const displayMassage = function(message) {                         //DRY função
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
   
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
   
    if(!guess){
        // document.querySelector('.message').textContent = "Nenhum número"
        displayMassage("Nenhum número")
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Numero correto"
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            console.log(highScore);
            document.querySelector('.highscore').textContent = highScore
        }
    }else if (guess !== secretNumber) {                      //Recoding do que esta comentado abaixo
        if (score > 1) {
            displayMassage(guess > secretNumber ? "Muito alto" : "Muito baixo")
            score--;
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = "Você perdeu o jogo"
            document.querySelector('.score').textContent = 0
        }
    }
    // else if (guess > secretNumber) {
        
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "Muito alto"
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
            
    //     }
    // }else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "Muito baixo"
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = "Você perdeu o jogo"
    //         document.querySelector('.score').textContent = 0
    //     }
        
    // }
})

document.querySelector('.again').addEventListener('click',function() {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = "Comece a advinhar..."
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';
})