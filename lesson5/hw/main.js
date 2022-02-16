// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
/*
let s = (a,b) =>a*b;
console.log(s(10,2));
*/
// - створити функцію яка обчислює та повертає площу кола
/*let pi = 3.14;
let s = (r) =>2*pi*r;
console.log(s(2));*/

// - створити функцію яка обчислює та повертає площу циліндру
/*const pi = 3.14;
let s = (h,r) =>2*pi*h*r;
console.log(s(2, 3));*/
// - створити функцію яка приймає масив та виводить кожен його елемент
/* let arr = (a) => {
    for (const aElement of a) {
        console.log(aElement);
    }
}
let b = [1,3,45,56]
arr(b);*/
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
/*let par = (p) => document.write(`<div><p>${p}</p></div>`);

par('edfkjskdhfksdksdhfjksbsdf');*/
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*
let list = (li) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li><p>${li} ${i}</p></li>`)
    }
    document.write(`</ul>`);
}
list('some text')*/
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*let list = (li, j) => {
    document.write(`<ul>`);
    for (let i = 0; i < j; i++) {
        document.write(`<li><p>${li} ${i}</p></li>`)
    }
    document.write(`</ul>`);
}
list('some text', 10)*/
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let arr = [1, 4, 56, true, false, 'hgjjlkjk']

let mas = (mas) => {
    document.write(`<ul>`);
    for (const ma of mas) {
        document.write(`<li>${ma}</li>`);
    }
    document.write(`</ul>`)
}

mas(arr)*/

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
/*
let users = [
    {name: 'vasya', age: 31, status: false, id:1},
    {name: 'petya', age: 30, status: true, id:2},
    {name: 'kolya', age: 29, status: true, id:3},
    {name: 'olya', age: 28, status: false, id:4},
    {name: 'max', age: 30, status: true, id:5},
    {name: 'anya', age: 31, status: false, id:6},
    {name: 'oleg', age: 28, status: false, id:7},
    {name: 'andrey', age: 29, status: true, id:8},
    {name: 'masha', age: 30, status: true, id:9},
    {name: 'olya', age: 31, status: false, id:10},
    {name: 'max', age: 31, status: true, id:11}
];
let list = (user) => {
    for (const userElement of user) {
        document.write(`<div>${userElement.id}</div>`)
        document.write(`<div>${userElement.name}</div>`)
        document.write(`<div>${userElement.age}</div>`)
    }
}
list(users);*/
