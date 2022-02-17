// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function Users(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let user = new Users(1, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955');
let user1 = new Users(2, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546');
let user2 = new Users(3, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955');
let user3 = new Users(4, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546');
let user4 = new Users(5, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546');
let user5 = new Users(6, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955');
let user6 = new Users(7, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546');
let user7 = new Users(8, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955');
let user8 = new Users(5, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546');
let user9 = new Users(10, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955');
let users = [user, user1, user2, user3, user4, user5, user6, user7, user8, user9];
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
/*let filterUser = users.filter((i)=>{
    if(i.id%2 === 0){
        return i
    }
})
console.log(filterUser);*/
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUser = users.sort((a,b)=>a.phone-b.phone)
// console.log(sortUser);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955', ['car', 'moto']),
    new Client(2, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546', ['milk', 'chokolate', 'car2']),
    new Client(3, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955', ['car', 'moto']),
    new Client(4, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546', ['milk', 'chokolate', 'car2']),
    new Client(5, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546', ['milk', 'chokolate']),
    new Client(6, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955', ['car', 'moto']),
    new Client(7, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546', ['milk', 'chokolate', 'car2']),
    new Client(8, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955', ['car', 'moto']),
    new Client(5, 'Lily', 'bahnyk', 'Lily@gmail.com', '0982513546', ['milk', 'chokolate']),
    new Client(10, 'andrii', 'liashok', 'liashok@gmail.com', '0983107955', ['car', 'moto'])
];
// console.log(client);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
/*
let sortClient = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);*/
