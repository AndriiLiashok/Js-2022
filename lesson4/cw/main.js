// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*function min(a,b,c) {
    if(a<b && a<c){
        return a;
    }    else if (b<a && b<c){
        return b;
    }else if(c<a && c<b){
        return c;
    }
}

console.log(min(1, 10, 5));*/
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*function max(a,b,c) {
    if(a>b && a>c){
        return a;
    }    else if (b>a && b>c){
        return b;
    }else if(c>a && c>b){
        return c;
    }
}

console.log(max(1, 10, 5));*/
// - створити функцію яка повертає найбільше число з масиву
/*function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(max>arr[i]){
            max=max;
        }else if (max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
let arr = [1,34,545,4,234];
console.log(max(arr));*/
// - створити функцію яка повертає найменьше число з масиву
/*function min(arr) {
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
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13\
/*function sum(...arr) {
    let a = 0
    for (const arrElement of arr) {
        a+=arrElement;
    }
    return a;

}

console.log(sum(1, 3, 5,  7));*/
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*function sum(...arr) {
    let a = 0
    for (const arrElement of arr) {
        a+=arrElement;
    }
    return a/arr.length;

}
console.log(sum(1, 3, 5,  7));*/
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*function mas(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(min>arr[i]){
            min=arr[i];
        }else if (min<arr[i]){

        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(max>arr[i]){
        }else if (max<arr[i]){
            max=arr[i];
        }
    }
    document.write(`<div>${max}</div>`)
    return min;
}
let arr = [34,545,4,234];
console.log(mas(arr));*/
/*let arr = [34,545,4,234];
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (const element of arr) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    document.write(`<div>${max}</div>`)
    return min;
}

console.log(minMax(arr));*/
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
/*function maxRandom(length){
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

console.log(maxRandom(30));*/
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
/*function maxRandom(length, limited){
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*limited));
    }
    return arr;
}

console.log(maxRandom(30,200));*/
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function zvorot(arr) {
//     let mas = [];
//     for (let i = arr.length-1; i > -1; i--) {
//         mas.push(arr[i]);
//     }
//     return mas;
// }
//
// console.log(zvorot([1, 43, 7, 5, 4, 3, 7]));