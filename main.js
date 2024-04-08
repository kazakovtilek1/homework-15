let header_menu = document.querySelector('.header_menu ul')
let burger_menu = document.querySelector('.burger_menu')
let red = document.querySelector('#red')
let blue = document.querySelector('#blue')
let pink = document.querySelector('#pink')
let yellow = document.querySelector('#yellow')

let showBurger = () => {
    header_menu.classList.toggle('active')
    burger_menu.classList.toggle('active')
}



let changeColor = () => {
    red.classList.toggle('red2');
}
red.addEventListener('click', changeColor)



let changeColor2 = () => {
    blue.classList.toggle('blue2');
}
blue.addEventListener('click', changeColor2)



let changeColor3 = () => {
    pink.classList.toggle('pink2');
}
pink.addEventListener('click', changeColor3)



let changeColor4 = () => {
    yellow.classList.toggle('yellow2');
}
yellow.addEventListener('click', changeColor4)