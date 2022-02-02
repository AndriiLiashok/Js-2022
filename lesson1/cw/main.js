// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
/*
let a = [1,4,6,8,9, Math.random(), 35,75,90,100]
 let result = a[0]+a[1]+a[2]+a[3]+a[4]+a[5]+a[6]+a[7]+a[8]+a[9];
console.log(result);
let b = 0;
for (let i = 0; i < a.length; i++) {
     b += a[i];
}
console.log(b)
*/


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
/*let book = {
  name: 'Kobzar',
    number: 720,
    genre: 'lyrics'
};
console.log(book);*/
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
/*let book = {
    name: "Hansel and Gretel",
    number: 210,
    genre: 'lyrics',
    authors: [
        'Brüder Grimm',
        'Gebrüder Grimm'
    ]
}*/
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
/*let book = [
    {
        name: 'Kobzar',
        number: 720,
        genre: 'lyrics'
    },
    {
        name: "Hansel and Gretel",
        number: 210,
        genre: 'lyrics',
        authors: [
            'Brüder Grimm',
            'Gebrüder Grimm'
        ]
    }
];
console.log(book[0]);
console.log(book[1]);*/
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
/*let height = 23;
let width = 10;
let s = height * width;
console.log(s);*/
// Значення площі зберігати в змінній s.
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
/*let heightC = 10;
const pi = 3.14;
let dC = 4;
let v = pi * Math.pow(dC/2,2)*heightC;
console.log(v);*/
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
/*
let n = 3;
let m =4;
let k1 = Math.pow(n,2)+Math.pow(m,2);
let k = Math.sqrt(k1)
console.log(k);*/
