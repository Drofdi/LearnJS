"use strict";

//-----------------alert, prompt, confirm
//result = prompt(title, [default]);
/*title
Текст для отображения в окне.
    default
Необязательный второй параметр, который устанавливает начальное
значение в поле для текста в окне.*/
/*
let age = prompt('Сколько тебе лет?', 100);
alert(age); //выведет то число которое мы ввели в промпт*/

//confirm
//result = confirm(question); // тоже самое что промпт, только при
// нажатии на ОК вернет true, если нажать отмена то вернет false;

//Создайте страницу, которая спрашивает имя у пользователя и выводит его.
/*let userNamePrompt = prompt('Enter Ur Name');
alert(`Hello ${userNamePrompt}`);*/

/*Используя конструкцию if..else, напишите код, который будет спрашивать:
„Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!»,
в противном случае – отобразить: «Не знаете? ECMAScript!»
let name = prompt('Оффициальное название JS');
if (name == 'ECMAScript') {
    alert('верно')
} else {
    alert('неверно')
}*/

/*Используя конструкцию if..else, напишите код, который
получает число через prompt, а затем выводит в alert:
    1, если значение больше нуля,
    -1, если значение меньше нуля,
    0, если значение равно нулю.
let num = prompt('Enter number');
if (num > 0){
    alert(1)
} else if (num < 0){
    alert(-1)
} else {
    alert(0)
}*/

/*Перепишите 'if' в '?'
важность: 5
Перепишите конструкцию if с использованием условного оператора '?':
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}
Решение:
let result = (a + b < 4) ? 'Мало' : 'Много';*/

/*Перепишите if..else с использованием нескольких операторов '?'.
    Для читаемости рекомендуется разбить код на несколько строк.
    let message;
if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
Решение:
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина':
            '';*/

//найти наименьший делитель числа через while
/*let num = 9;
let divisor = 2;
while (divisor <= num){
    if (num % divisor == 0){
        console.log(divisor)
        break;
    }
    divisor++
}*/

/*Напишите условие if для проверки, что переменная
age находится в диапазоне между 14 и 90 включительно.
let age = 21;
if (age >= 14 && age <= 90){
    console.log('ok');
}*/

/*Напишите условие if для проверки, что
значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
let age = 11;
if (age <= 14 || age >= 90){
    console.log('Не входит в диапазон')
}

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.*/
/*let age = 220;
if (!(age >= 14 && age <= 90)){
    console.log('не входит в диапазон');
}*/

/*Напишите код, который будет спрашивать логин с помощью prompt.
    Если посетитель вводит «Админ», то prompt запрашивает пароль,
    если ничего не введено или нажата клавиша Esc – показать «Отменено»,
в противном случае отобразить «Я вас не знаю».
let login = prompt('Enter ur login');
if (login == 'admin' || login == 'Admin'){
    let password = prompt('Enter ur password');
    if (password == "it's me") {
        alert('Welcome');
    } else if (password === null){
        alert('Canceled');
    } else {
        alert('incorrect password');
    }
} else if (login === null) {
    alert('Canceled')
} else {
    alert('I dont know who u are')
}*/

/*переписать for в while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {

    alert( `number ${i}!` );
    i++;
}*/








































