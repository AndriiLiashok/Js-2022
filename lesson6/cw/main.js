// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
/*let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let valid = (i, sumvol) =>{
        let newArr = [];
        if (i.includes(sumvol)) {
            let a = i.split(sumvol)
            a.forEach((item) => {
                if (item) newArr.push(item);
            })
            console.log(newArr.join(' '))
        }
    }
    valid(n2, '-');*/


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
/*let arr = [];
let random = (length)=>{
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    return arr;
}
console.log(random(20));*/
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
/*let arr = [];
let random = (length)=>{
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    return arr.sort((a,b)=>a-b);
}
console.log(random(20));*/
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
/*let arr = [];
let random = (length)=>{
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    return arr.filter(number => number%2 === 0).sort((a,b)=>a-b);
}
console.log(random(20));*/
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
/*let arr = [];
let random = (length)=>{
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random()*100));
    }
    return arr.map(number => number.toString());
}
console.log(random(20));*/
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
/*let sortNums = (direction, arr) => {
    if (direction === '-') {
      return   arr.sort((a, b) => a - b);
    } else if (direction === '+') {
      return   arr.sort((a, b) => b - a);
    } else {
       return  console.log('всего хорошегго');
    }
}

console.log(sortNums('-', nums));*/
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
/*// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));*/
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
/*
console.log(coursesAndDurationArray.filter(a => a.monthDuration > 5));
*/
