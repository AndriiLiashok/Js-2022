// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*
function P(a,b) {
    return a*b;
}

console.log(P(10, 10));
*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r
/*function p(r) {
    const pi = 3.14;
    return 2*pi*r;
}

console.log(p(2));*/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*const pi = 3.14;
function p(h,r) {
        let P = 2*pi*h*r;
        document.write(`<div>${P}</div>`)
        return P;
}

console.log(p(2, 3));*/
// - створити функцію яка приймає масив та виводить кожен його елемент
/*function mas(a) {
    for (const aElement of a) {
        console.log(aElement);
    }
}
let b = [1,3,45,56]
mas(b)*/
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*function par(p) {
    document.write(`<div><p>${p}</p></div>`)
}
par('edfkjskdhfksdjkfhkskdfh,sdnfjksdhfjksbsdf');*/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*function sp(tex){
    document.write(`<ul>`);
    document.write(`<li>${tex}</li>`);
    document.write(`<li>${tex}</li>`);
    document.write(`<li>${tex}</li>`);
    document.write(`</ul>`)
}
sp('some text')*/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
/*function ul(tex, li) {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${tex}</li>`);
    }
    document.write(`</ul>`)
}
ul('some text',100)*/
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
/*let mas = [1, 4, 56, true, false, 'hgjjlkjk']

function masul(mas) {
    document.write(`<ul>`);
    for (const ma of mas) {
        document.write(`<li>${ma}</li>`);
    }
    document.write(`</ul>`)
}

masul(mas)*/
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

function docusers(user) {
    for (const userElement of user) {
        document.write(`<div>${userElement.id}</div>`)
        document.write(`<div>${userElement.name}</div>`)
        document.write(`<div>${userElement.age}</div>`)
    }
}
docusers(users);*/
