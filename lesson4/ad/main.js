// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
/*function f(a, b) {
    if(b === undefined){
        console.log(a);
    }else {
        console.log(a+b);
    }
}
f(10)*/
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
/*function sum(arr1,arr2) {
    let suma = [];
    for (let i = 0; i <arr1.length; i++) {
        suma.push(arr1[i]+arr2[i]);
    }
    return suma
}

console.log(sum([1, 2, 3, 4], [1, 2, 3, 5]));*/
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arr = [{name: 'Dima', age: 13},
    {model: 'Camry'}]
function key(arr) {
    let keys = [];

    for (let i = 0; i < arr.length; i++) {
       keys.push(arr[i].key)
    }
    return keys;
}

console.log(key(arr));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
