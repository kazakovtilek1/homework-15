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







// Задание 3:Spread оператор

// Создайте массив numbers с несколькими числами.
// Создайте новый массив numbersCopy, используя spread оператор, 
// чтобы скопировать все элементы из массива numbers.
// Добавьте новое число в массив numbers.
// Выведите оба массива (numbers и numbersCopy) в консоль, чтобы показать, 
// что изменения в одном массиве не влияют на другой.


// let numbers = [1, 5, 3, 6]

// let numbersCopy = [...numbers]

// console.log(numbers);
// console.log(numbersCopy);

// numbers.push(4, 7)





// Задание 4:Rest параметр

// Напишите функцию sum с использованием rest параметра, которая принимает любое количество 
// аргументов (чисел) и возвращает их сумму.
// Вызовите функцию sum несколько раз с разным количеством аргументов.
// Выведите результаты вызовов функции sum в консоль.
// Это задание позволит ученикам понять, как использовать операторы 
// spread и rest для работы с массивами и аргументами функций. Они смогут увидеть, как spread позволяет 
// копировать данные, а rest параметр собирать их в массивы.



// function getSum (...rest) {
//     let sum = rest.reduce((initialValue, value) => initialValue + value, 0)
//     console.log(sum);
// }

// getSum(5,5,5,85)