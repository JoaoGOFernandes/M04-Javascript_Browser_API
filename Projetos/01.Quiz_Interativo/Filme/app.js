const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B','B','B','B']

form.addEventListener('submit', event => {
    event.preventDefault()
    
    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25 
        }
    })
    scrollTo(0,0)  //recebe dois argumentos, a coordenada x e y

    finalResult.classList.remove('d-none')
    
    let counter = 0 
    
    const timer = setInterval(() => {
        finalResult.querySelector('span').textContent = `${counter}%`
        
        if(counter === score){
            clearInterval(timer)
        }
        counter++
    }, 10);
})


//SetTimeout - executa uma função dado um certo tempo em milisegundos
//setTimeout(()=>{}, tempo) - recebe uma função  o parametro de tempo


//SetTimeInterval - similar ao setTimeout, mas a função sera executada repetidamente, intervalado pelo tempo passado
//setInterval(()=>{}, tempo)

/*
const timer = setInterval(()=>{
    console.log('1 segundo se passou')
    counter++                                 //contador para determinar quantas repetições vc quer fazer

    if(counter === 5)
        clearInterval(timer)                 //O cleatInterval precisa de um id q é retornado pela propria setInterval
}, 1000)
*/