// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
/*function Car(model, manufacturer, year, maxspeed,rnginecapacity ) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year =year;
    this.maxspeed = maxspeed;
    this.rnginecapacity = rnginecapacity;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {
        for (const carKey in this) {
            if(typeof this[carKey] !== 'function'){
                console.log(`${carKey} - ${this[carKey]}`);
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
         return this.maxspeed + newSpeed;
    }
    this.changeYear = function (newValue){
        return this.year = newValue;
    }
    this.driver = function (name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
let car = new Car('vw','Німці', 2015,240,1.8)
// console.log(car);
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(23));
// console.log(car.changeYear(2008));
// console.log(car);
car.driver('Andrii', "liashok")
console.log(car);
car.info()*/

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

/*class Car{
    constructor(model, manufacturer, year, maxspeed, rnginecapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.rnginecapacity = rnginecapacity;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    info(){
        for (const carKey in this) {
            console.log(`${carKey} - ${this[carKey]}`);
        }
    }
    increaseMaxSpeed(newSpeed) {
        return this.maxspeed + newSpeed;
    }
    changeYear(newValue){
        return this.year = newValue;
    }
    driver(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
let car = new  Car('vw','Німці', 2015,240,1.8);
car.drive();
car.info();
console.log(car.increaseMaxSpeed(23));
console.log(car.changeYear(2008));
car.info();
car.driver('Andrii', "Liashok");
car.info();*/
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let cinderellas = [
    new Cinderella('Vika',23,45),
    new Cinderella('Sasha',25,40),
    new Cinderella('Lily',21,38),
    new Cinderella('Yla',26,41),
    new Cinderella('Natasha',23,39),
    new Cinderella('Olia',18,37)
];
console.log(cinderellas);
class Prince extends Cinderella{
    constructor(name, age, shoe) {
        super(name, age);
        this.shoe = shoe;
    }
}
let prince = new Prince('vasa',24,38);

function find(cinderellas, prince) {
    for (const cinderella of cinderellas) {
        if (cinderella.footsize === prince.shoe){
            console.log(cinderella);
        }
    }
}
find(cinderellas,prince);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinder = cinderellas.find(cinder => cinder.footsize === prince.shoe);
console.log(findCinder);

