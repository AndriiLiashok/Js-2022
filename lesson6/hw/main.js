// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);*/
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
/*let text = 'hello world';
let text1 = 'lorem ipsum';
let text2 = 'javascript is cool';
console.log(text.toUpperCase());
console.log(text1.toUpperCase());
console.log(text2.toUpperCase());*/
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
/*let text = 'HELLO WORLD';
let text1 = 'LOREM IPSUM';
let text2 = 'JAVASCRIPT IS COOL';
console.log(text.toLowerCase());
console.log(text1.toLowerCase());
console.log(text2.toLowerCase());*/
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
/*let str = ' dirty string   ';
let strgood = str.replaceAll('   ','').replace(' ','');
console.log(str);
console.log(strgood);*/
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
/*
let str = 'Каждый охотник желает знать';
    let arr = str.split(' ')
    console.log(arr);
*/

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
/*    let str = 'Каждый охотник желает знать';
    let delete_characters = (arr, index) =>{
        return arr.substr(0,index);
    }
    document.writeln(delete_characters(str, 7)); // Каждый*/

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
//     let insert_dash = (arr)=>{
//         return arr.replaceAll(' ','-').toUpperCase();
//     }
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
/*let text  = (arr) =>{
    return arr[0].toUpperCase()+arr.slice(1)
}
let sometext = 'sdkljsdfjs sdkfjslfjsldjf';
console.log(text(sometext));*/
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(arr => arr[0].toUpperCase()+arr.slice(1)).join(' ');
}
console.log(capitalize('fhjsdk dksfjsdjk ksdfjksdkf kkl'));