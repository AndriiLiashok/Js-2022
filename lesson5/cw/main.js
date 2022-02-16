// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*let min = (a,b,c) =>{
    if(a<b && a<c){
        console.log(a);
    }else if (b<a && b<c){
        console.log(b);
    }else {
        console.log(c);
    }
}
min(8,7,9);*/
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*let min = (a,b,c) =>{
    if(a>b && a>c){
        console.log(a);
    }else if (b>a && b>c){
        console.log(b);
    }else {
        console.log(c);
    }
}
min(8,12,9);*/
// - створити функцію яка повертає найбільше число з масиву
/*let max = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(max>arr[i]){
        }else if (max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
let arr = [1,34,545,4,234];
console.log(max(arr));*/
// - створити функцію яка повертає найменьше число з масиву
/*let min = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(min>arr[i]){
            min=arr[i];
        }else if (min<arr[i]){
        }
    }
    return min;
}
let arr = [34,545,4,234];
console.log(min(arr));*/
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*let sum = (arr) =>{
    let suma = 0;
    for (const arrElement of arr) {
        suma +=arrElement;
    }
    return suma
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(sum(arr));*/
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*let sum = (arr) =>{
    let suma = 0;
    for (const arrElement of arr) {
        suma +=arrElement;
    }
    return suma/arr.length;
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(sum(arr));*/
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*let max = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    document.write(`${min}`)
    return max;
}
let arr = [ 34, 545, 4, 234];
console.log(max(arr));*/
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*let arrRandom = (length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

console.log(arrRandom(30));*/
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*let arrRandom = (length, limited) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*limited));
    }
    return arr;
}

console.log(arrRandom(30,200));*/
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*
let zvorot = (arr) => {
    let mas = [];
    for (let i = arr.length-1; i > -1; i--) {
        mas.push(arr[i]);
    }
    return mas;
}

console.log(zvorot([1, 43, 7, 5, 4, 3, 7]));*/
