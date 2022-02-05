// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/*
let number = [1,4,65,76,989];
let string = ['hello', 'world', 'Andrii', 'Lily', 'Anna'];
let mas = ['Andrii', 24, true, 'Lily' ,21, false];
console.log(number);
console.log(string);
console.log(mas);
*/

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*let arr = [];
arr[0] = 1;
arr[1] = 34;
arr[2]= false;
arr[3]='Andrii';
arr[4]='lily';
console.log(arr);*/
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/*for (let i = 0; i < 10; i++) {
    document.write(`<div><p>Цикл ${i}</p></div>`)
}*/
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*for (let i = 0; i < 10; i++) {
    document.write(`<div><p>Цикл ${i}</p></div>`)
}*/
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*let i=0;
while (i<20){
    document.write(`<h1>Цикл ${i}</h1>`);
    i++;
}*/
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let i=0;
while (i<20){
    document.write(`<h1>Цикл ${i}</h1>`);
    i++;
}*/
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 1950, 1960, 1970];
for (let i = 0; i < years.length; i++) {
    const year = years[i];
    console.log(year);
}*/
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*let string = ['hello', 'world', 'Andrii', 'Lily', 'Anna', 'hello', 'world', 'Andrii', 'Lily', 'Anna'];
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}*/
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*let mas = ['Andrii', 24, true, 'Lily' ,21, false, 'Andrii', 24, true, 'Lily' ,21, false];
for (let i = 0; i < mas.length; i++) {
    console.log(mas[i]);
}*/
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*let mas = ['Andrii', 24, true, 'Lily' ,21, false, 'Andrii', 24, true, 'Lily' ,21, false];
for (let i = 0; i < mas.length; i++) {
    if(typeof (mas[i])=== "boolean"){
        console.log(mas[i]);
    }
}*/
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*let mas = ['Andrii', 24, true, 'Lily' ,21, false, 'Andrii', 24, true, 'Lily' ,21, false];
for (let i = 0; i < mas.length; i++) {
    if(typeof (mas[i])=== "number"){
        console.log(mas[i]);
    }
}*/
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
/*let mas = ['Andrii', 24, true, 'Lily' ,21, false, 'Andrii', 24, true, 'Lily' ,21, false];
for (let i = 0; i < mas.length; i++) {
    if(typeof (mas[i])=== "string"){
        console.log(mas[i]);
    }
}*/
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
/*
let arr = [];
arr[0]='Andrii';
arr[1]=24;
arr[2]=false;
arr[3]='Lily';
arr[4]=21;
arr[5]=true;
arr[6]='Natali';
arr[7]=34;
arr[8]=false;
arr[9]=true;
for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    console.log(arrElement);
}
*/

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div><p>Цикл ${i}</p></div>`)
}*/
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div><p>Цикл ${i}</p></div>`)
}*/
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`<div><p>Цикл ${i}</p></div>`)
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`<div><p>Цикл ${i}</p></div>`)
}*/
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1){
        console.log(i);
        document.write(`<div><p>Цикл ${i}</p></div>`)
    }

}*/
