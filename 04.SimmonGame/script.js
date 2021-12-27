//Condições iniciais
// const green = document.querySelector('.green')
// const red = document.querySelector('.red')
// const yellow = document.querySelector('.yellow')
// const blue = document.querySelector('.blue')
// const btn = document.querySelectorAll('.btn')

// btn.forEach(botao => botao.addEventListener('click', function(){
//     setTimeout(function(){ 
//         botao.classList.toggle('pressed') 
//     }, 100);
//     botao.classList.toggle('pressed')
// }))

// btn.forEach(botao => botao.addEventListener('keydown', function(e){
    

//     if (e.key === 'Escape' ) {
//         setTimeout(function(){
//             green.classList.remove('hidden')
//         }, 100)
//         green.classList.add('green')
//      }
 
// }))



// document.addEventListener('keydown', function(e) {

//     if (e.key === 'Escape' ) {
//         // level 1
//        setTimeout(function(){
//            green.classList.toggle('visibility')
//        }, 200)
//            green.classList.toggle('visibility')
//     }
// })



//Aula codigo
let level = 0;
let started = false
let coresBotoes = ["red", "blue", "green", "yellow"]
let corAleatoriaGerada = []
let coresEscolhidas = []

document.addEventListener('keydown', event => {    //Quando uma tecla for pressionada a letra vai pra event e ela deixa de ser false
    if(event && !started) {
        document.getElementById('level-title').textContent = 'Level ${level}'
        started = true;
    } //Começa o jogo mostrando o level
})

document.querySelectorAll('.btn').forEach(btnEl => {
    btnEl.addEventListener('click', function(event){
        const corEscolhida = event.target.id;
        coresEscolhidas.push(corEscolhida)

        animarBotao(corEscolhida)
        playSom(corEscolhida)

        checkResposta(coresEscolhidas.length -1)
    })
})

function checkResposta(coresEscolhidasTam) {
    if(coresAleatoriasGeradas[coresEscolhidasTam] === coresEscolhidas[coresEscolhidasTam]){
        if(coresAleatoriasGeradas.length === coresEscolhidas.length){
            setTimeout(function(params) {
                
            })
        }
    }else{
        playSom("wrong")

        document.querySelector('body').classList.add('game-over')
        document.getElementById('level-title').textContent = "Game Over! Pressione qualquer tecla para recomeçar"

        setTimeout()
    }
}

function proximaSequencia() {
    coresEscolhidas = []
    level++;
    document.getElementById('level-title').textContent = `Level ${level}`

    const randomNumber = Math.floor(Math.random() * 4)  //Vai pegar o menor numero inteiro do que sair do random

    const corAleatoriaGerada = coresBotoes[randomNumber]
    corAleatoriaGerada.push(corAleatoriaGerada)
    //Geramos uma sequencia de cores para o jogo

    animaBotao(corAleatoriaGerada)
    
    playSom(corAleatoriaGerada)
}

function animaBotao(corAleatoriaGerada){
    document.getElementById(corAleatoriaGerada).classList.add("pressed")

    setTimeout(function(){
        document.getElementById(corAleatoriaGerada).classList.remove("pressed")
    }, 100)

}

function playSom(corAleatoriaGerada) {
    const audio = new Audio(`sounds/${corAleatoriaGerada}.mp3`)

    audio.play()
}

function recomecarJogo() {
    level = 0
    coresAleatoriasGeradas = []
    started = false
}