//Copy - evento disparado quando um texto é copiado(ctrl+c ou botao direito+copiar)
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
    console.log('Texto copiado');
})

//Mousemove - mapea o movimento do mouse em uma area
const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
    div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
    console.log('Movimentou');
})

//Wheel - evento de rolagem do scroll
document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY);
})