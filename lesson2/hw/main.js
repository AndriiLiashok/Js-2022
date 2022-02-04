// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
/*
let time = Math.round(Math.random()*59);
console.log(time);
if (time<=15){
    console.log(1);
} else if (time>15 && time<=30){
    console.log(2);
}else if (time>30 && time<=45){
    console.log(3);
}else if(time>45 && time<=60){
    console.log(4);
}else {
    console.log('wtf');
}
*/

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
/*let day = Math.round(Math.random() * 31);
console.log(day);
if (day<=10){
    console.log(1);
} else if (day > 10 && day <= 20){
    console.log(2);
}else if (day>20 && day<=31){
    console.log(3);
} else {
    console.log('wtf');
}*/
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

/*
let test = confirm('test');
console.log(test);
if (test){
    console.log('Вірно');
}else {
    console.log('Неправильно');
}

let test2 = test ? console.log('Вірно') : console.log('Неправильно');
console.log(test2);
*/

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
/*
let a = prompt('a');
console.log(a);
switch (+a) {
    case 0:
        console.log('Вірно');
        break;
    default:
        console.log('Неправильно');
}
*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
/*
let day = prompt('day');
switch (+day) {
    case 1:
        console.log('to go to work');
        break;
    case 2:
        console.log('a trip to a restaurant');
        break;
    case 3:
        console.log('rest');
        break;
    case 4:
        console.log('a trip to the movies');
        break;
    case 5:
        console.log('sleep');
        break;
    case 6:
        console.log('sleep2');
        break;
    case 7:
        console.log('sleep3');
        break;
}
*/

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
/*let year = prompt('year');
if (+year%4===0){
    console.log('Високосний');
}else {
    console.log('невисокосний');
}*/
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let JS = prompt('Яка «офіційна» назва JavaScript?');
// if (JS === 'ECMAScript'){
//     console.log('Вірно');
// }else {
//     console.log('«Не знаєте? ECMAScript!');
// }