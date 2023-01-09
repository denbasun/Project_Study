"use strict";

// let number = 4.6;
// console.log(-4/0);

// console.log("string" * 9);

// const persone = "Alex";

// const bool = true; 

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     IsMarried: false
// };

// console.log(obj.age);
// console.log(obj.name);

// let arr = ['plum.png', 'orange.png', 6, 'apple.png'];
// console.log(arr[1]);

// const arr = ["a", "b", "c",];

// arr[10] = '323';
// console.log(arr);

// const arrObj = {
//     a:'a',
//     b: 'b',
//     c: 'c'
//     abc: {
//         df: [{}]
//         def: {

//         }
//     }

// }
// arrObj.d = 'd';

// console.log(arrObj['d']);

// alert ('Hello');

// const result = confirm('are u 18?');

// console.log(result);

// const answer = +prompt('are u 18?', '');

// console.log(answer+5);

// const answers = [];

// answers[0] = prompt('Name?', '');
// answers[1] = prompt('Old?', '');
// answers[2] = prompt('Place?', '');

// document.write(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const namee = 'Ivan';

// alert(`привет, ${namee}`);

// console.log(4+ '5');

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// console.log(6 == "6");
// console.log(2 + 2 * 2 === "6");

// const isChecked = true,
//         isColse = false;

// console.log(!isChecked || isColse);


// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('Error');
// }



// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if ( num > 100) {
//     console.log('A lot');
// } else {
//     console.log('OK!');
// }
// Тернарный оператор - он тернарный потому что в его работе участвует аже 3 аргумента и это единственный такой в js
// (num === 50) ? console.log('OK!') : console.log('Error');
// Switch
// const num2 = 50;
// switch (num2) {
//     case 49:
//         console.log('NO!');
//         break;
//     case 100:
//         console.log('NO!Bigger!');
//         break;
//     case 50:
//         console.log('OK!');
//         break;    
//     default:
//         console.log('Not this time');              
//         break;  
// }
// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries) {
//     console.log('я сыт')
// }
 
// И - оператор
// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries );
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "fwewfewfew");

// if(hamburger === 3 && cola === 1 && fries ) {
//     console.log('Все сыты');
// } else {
//     console.log('Уходим');
// }

// ИЛИ-оператор

// const hamburger = 0;
// const fries = null;
// const cola = 0;

// if(hamburger || cola || fries ) {
//     console.log('Все довльны');
// } else {
//     console.log('Уходим');
// }
// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log (johnReport || alexReport || samReport || mariaReport);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }else {
//     console.log('Wrong!')
// };

// Цыкы

// let num = 50;

// while (num <= 57) {
//     console.log(num);
//     num++;
// }

// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1;  i < 8; i++) {
//     console.log(i);
// }

// let num = 50;

// for (let i = 1;  i < 8; i++) {
//     console.log(num);
//     num++;
// }



// for (let i = 1;  i < 8; i++) {
//     if (i === 3 ) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1;  i < 8; i++) {
//     if (i === 3 ) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i<3; i++) {
//     console.log(i);
//     for (let j = 0; j<3; j++) {
//         console.log(j);
//     }
// };

// let result = '';
// const lenght = 7;

// for (let i = 1; i<lenght;  i++) {
//     console.log(i);
//     for (let j = 0 ; j < i; j++) {
//         result += '*'
//     }
//     result += '\n';
// };

// console.log(result);


//  first: for (let i = 0; i<3; i++) {
//     console.log(`First level:${i}`);
//     for (let j = 0; j<3; j++) {
//         console.log(`Second level:${j}`);
//         for (let k = 0; k<3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level:${k}`);;
//         }
//     }
// };

// first: for (let i = 0; i<3; i++) {
//     console.log(`First level:${i}`);
//     for (let j = 0; j<3; j++) {
//         console.log(`Second level:${j}`);
//         for (let k = 0; k<3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level:${k}`);;
//         }
//     }
// };

//-----------------------------------------------------------------
// const numberOfFilms = +prompt('How many movies have you watched?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     ganres: [],
//     private: false
// };


// for(let i = 0; i <2; i++){
//     const moviesWatched = prompt('last movie you watched?', '');
//     const raitingOfFilm = prompt('Rate this movie', '');

//     if (moviesWatched !=null && raitingOfFilm != null && moviesWatched != '' && raitingOfFilm != "" && moviesWatched.length < 50 && raitingOfFilm.length < 50) {
//         personalMovieDB.movies[moviesWatched] = raitingOfFilm;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     };

// };

// 2 способ с do while
// let i = 1;
// do{
//     const moviesWatched = prompt('last movie you watched?', '');
//     const raitingOfFilm = prompt('Rate this movie', '');
//     i++;

//     if (moviesWatched !=null && raitingOfFilm != null && moviesWatched != '' && raitingOfFilm != "" && moviesWatched.length < 50 && raitingOfFilm.length < 50) {
//         personalMovieDB.movies[moviesWatched] = raitingOfFilm;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     };
    
// } while (i < 3); 

// 3 способ while
// let i = 0
// while (i < 2) {
//     const moviesWatched = prompt('last movie you watched?', '');
//     const raitingOfFilm = prompt('Rate this movie', '');
//     i++;

//     if (moviesWatched !=null && raitingOfFilm != null && moviesWatched != '' && raitingOfFilm != "" && moviesWatched.length < 50 && raitingOfFilm.length < 50) {
//         personalMovieDB.movies[moviesWatched] = raitingOfFilm;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     };
// };
    


// if (personalMovieDB.count < 10 ) {
//     console.log('Watched quite a few movies');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('You are a classic viewer');
// } else if (personalMovieDB.count >= 30) {
//     console.log('You are a movie fan!');
// } else {
//     console.log('Error');
// }
 
// console.log(personalMovieDB);

//-----------------------------------------------------------------

// function

// function showFirstMessege() {
//     console.log("Hello World");

// }
// showFirstMessege ();

// //аргумент
// let num = 20;
// function showFirstMessege(text, done) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
    
// }
// showFirstMessege ("Hello World");
// console.log(num);
// ------------------------
// function calc(a, b) {
//     return (a + b);

// }
// console.log (calc(4, 3));
// console.log (calc(5, 6));
// console.log (calc(10, 6));
// ------------------------
// function ret() {
//    let num = 50;
//    return num; 
// }
// const anotherNum = ret();
// console.log(anotherNum);
// ------------------------
// const logger = function() {
//     console.log("hello"|);
// };
// logger();
// ------------------------
// const calc2 = (a, b) => a + b;
// console.log (calc2(4, 5));
// ------------------------
// const calc = (a, b) => { 
//     return a + b 
// };
// console.log (calc(4, 5));

// ------------------------


// function convert (amount) {
//     console.log(28 * amount);
// }
// convert(500);

// ------------------

// const usdCurr2 = 28;
// function convert (amount) {
//     console.log(usdCurr2 * amount);
// }
// convert(500, usdCurr2);

// ------------------

// const usdCurr = 28;
// function convert (amount,  curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);

// ------------------

// const usdCurr = 28;
// const euroCurr = 32;

// function convert (amount,  curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, euroCurr);

//---------return-----------------
// const usdCurr = 28;
// const discount = 0.7;
// function convert (amount,  curr) {
//     console.log(curr * amount);
//     return curr * amount;
// }

// function promotion (result){
//     console.log(result * discount);
    
// }

// promotion (convert(500, usdCurr));

// // или это все сверху можно записать как 

// const usdCurr = 28;
// const discount = 0.9;
// function convert (amount,  curr) {
//     return curr * amount;
// }

// function promotion (result){
//     console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion (res);
// ---------------------------------
// function test() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//         if(i === 3){
//             return
//         }
//     }
//     console.log('Done');
// }
// test();
//-------------------------------
// function doNothing() {};
// console.log(doNothing() === undefined)
//-----------------------------------------
// const str = 'test';
// const arr = [1, 2, 4];

// console.log(str[2]);

//---------------------------
// Примеры методов для строк
// const str = 'test';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);



// const fruit = 'Some fruits';
// console.log(fruit.indexOf('S'));


// const logg = 'Hello World';

// console.log(logg.slice(2, 5));


// const logg = 'Hello World';

// console.log(logg.slice(2, 3));


// const logg = 'Hello World';

// console.log(logg.substring(4, 1));


// const logg = 'Hello World';

// console.log(logg.substr(0, 3));

// Примеры методов для чисел
// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.9px';
// console.log(parseInt(test));

// const test = '12.7px';
// console.log(parseFloat(test));

// -----------------------------------------------------------------
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many movies have you watched?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many movies have you watched?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     ganres: [],
//     private: false
// };

// function rememberMyFilms() {
//     for(let i = 0; i <2; i++){
//         const moviesWatched = prompt('last movie you watched?', '').trim();
//         const raitingOfFilm = prompt('Rate this movie', '').trim();
    
//         if (moviesWatched !=null && raitingOfFilm != null && moviesWatched != '' && raitingOfFilm != "" && moviesWatched.length < 50 && raitingOfFilm.length < 50) {
//             personalMovieDB.movies[moviesWatched] = raitingOfFilm;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         };
    
//     };
// }
// rememberMyFilms();

// function detectionPersonalLevel() {
//     if (personalMovieDB.count < 10 ) {
//         console.log('Watched quite a few movies');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('You are a classic viewer');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('You are a movie fan!');
//     } else {
//         console.log('Error');
//     }
// }
// detectionPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
// }
// showMyDB(personalMovieDB.private);


// function writeYourGanres () {
//     for(let i = 1; i <= 3; i++){
//         const favouriteFilm = prompt(`Your favourite ganre ${i}?`, '').trim();
//         if (isNaN(favouriteFilm)) {
//             personalMovieDB.ganres [i-1] = favouriteFilm ;
//         } else {
//             i--;
//         }
        

//     };
// }
// writeYourGanres ();

// // 2й  варикант зарписи функции writeYourGanres если не использовать запрет на ввод чисел
// function writeYourGanres () {
//     for(let i = 1; i <= 3; i++){
//         personalMovieDB.ganres [i-1] = prompt(`Your favourite ganre ${i}?`, '');

//     };
// }
// writeYourGanres ();



//-----------------------------------------------------------------


// function first() {
//     // Do smth
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second (){
//     console.log(2);
// }

// first();
// second();
// -------------------------------------------------
// Пример callback функции

// function  learnJS(lang, callback, ) {
//     console.log (`Я учу: ${lang}`);
//     callback();
// }

// function done (){
//     console.log('я прошел этот урок');
// }

// learnJS('JavaScript', done);

// Мой примео чтобы понять callback больше

// function  learnJS(lang, callback, callbeck2) {
//     console.log (`Я учу: ${lang}`);
//     callbeck2();
//     callback();
// }

// function done (){
//     console.log('я прошел этот урок');
// }

// function level (){
//     console.log('сложный');
// }


// learnJS('JavaScript', done, level);
//----------------------------------------------------
// const options = {
//     name: 'test',
//     width: 1204,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg:'red'
//     }
// };
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }   
// }
// console.log(counter);
// допы к коду выше для обучения
// console.log (options.name);

// // delete options.name;

// console.log (options);

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
    
// }
//-----------------------------------------------------------------------------
// создание метода в объекте
// const options = {
//     name: 'test',
//     width: 1204,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg:'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };
// options.makeTest();

// console.log(Object.keys(options).length);


// диструктуризация в объекте

// const options = {
//     name: 'test',
//     width: 1204,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg:'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };
// options.makeTest();

// const {border, bg} = options.colors; //- это диструктуризация

// console.log(border);

// Массивы и псевдомассивы

// const arr = [1,2,3,6,8];

// arr.pop(); добавляет сзади число
// arr.push(10); удаляет сзади число

// console.log(arr);

// перебор эелементов в масиве
// const arr = [1,2,3,6,8];
// for (let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// 2й способ

// const arr = [1,2,3,6,8];
// for (let value of arr) {
//     console.log(value);
// }

// forEach - метод
// const arr = [1,2,3,6,8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// ------------------------------------------------
// const arr = [1,2,3,6,8];
// arr.forEach(function(item, i, arr ){
//     console.log(`${i}: ${item} inside massive ${arr}`);
// });
// ----------------------------------------------
// ----------------split, join, sort методы-----------------

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// ----------------sort чисел-----------------

// let arr = [2, 13, 26, 8, 10];
// arr.sort();
// console.log(arr);

// ------------------------------

// let arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// --------------передача данны по значению------------------------
// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);
// ----------------передача данны по ссылке----------------------
// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //вот тут передается ссылка на уже существующий объект с верху obj
// copy.a = 10;
// console.log(copy);
// console.log(obj);
//----------------как создавать копии объектов, массивов и тд. Cпособ 1(ПОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА)-----------------
// function copy (mainObj) {
//     let objCopy = {};
//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj [key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 13;
// newNumbers.c.x = 11;
// console.log(numbers);
// console.log(newNumbers);


//----------------как создавать копии объектов, массивов и тд. Cпособ 2(ПОВЕРХНОСТНАЯ КОПИЯ ОБЪЕКТА)-----------------

//-----для того чтобы сработал этот код нужно раздокументировать верхний код, они связаны
// const add = {
//     d: 17,
//     e: 20

// };

// console.log(Object.assign(numbers, add));

//-------------------------------------------
// const add = {
//     d: 17,
//     e: 20

// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);

//метод создания копии массивов
// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[1] = 'dqsdefewf'
// console.log(newArray);
// console.log(oldArray);

//-----------Оператор разворота Spread
//    const video = ['youtube', 'vimeo', 'tiktok'],
//       blogs = ['wordpress','lovejournal','blogger'],
//       internet = [...video, ...blogs, 'fb', 'inst'];  
// console.log(internet);   
//--------------------------------------------------------
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];

// log(...num)
//------------------------------------------------------
// const array = ['a','b'];
// const newArray = [...array];
// newArray[1] = 'dqsdefewf'
// console.log(array);
// console.log(newArray);

//-------------------------------------------------------
// const q = {
//     one: 1,
//     two: 2
// };
// const newq = {...q};
// newq.two = 12;
// console.log(q);
// console.log(newq);

// ОСНОВЫ ООП

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// ------------------------------------

// let str = 'some';
// let strObj = new String(str);

// console.dir([1,2,3]);

// объеденяем свойства соладат и джона устраевшим методом, потому что в старом коде он встречается и его надо знать. 
//Солдат в этом случе протип джона и его свойства передаются ему как armor

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello')
//     }
// };

// const john = {
//     health: 100
// }

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);
// john.sayHello()
    
// -----------Актуальный метод прототипирования. 1й вариант записи----------   

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello')
//     }
// };

// const john = {
//     health: 100
// }


// Object.setPrototypeOf(john, soldier);

// console.log(john);
// console.log(john.armor);
// john.sayHello()
    
// ------Актуальный метод прототипирования. 2й вариант записи который часще используется-------   

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello')
//     }
// };

// const john = Object.create(soldier);

// console.log(john.health);
// console.log(john.armor);
// john.sayHello()
    
//----------------проект продолжение без рефакторинга на методы -------------------------------------------------------
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many movies have you watched?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many movies have you watched?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     ganres: [],
//     private: false
// };

// function rememberMyFilms() {
//     for(let i = 0; i <2; i++){
//         const moviesWatched = prompt('last movie you watched?', '').trim();
//         const raitingOfFilm = prompt('Rate this movie', '').trim();
    
//         if (moviesWatched !=null && raitingOfFilm != null && moviesWatched != '' && raitingOfFilm != "" && moviesWatched.length < 50 && raitingOfFilm.length < 50) {
//             personalMovieDB.movies[moviesWatched] = raitingOfFilm;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         };
    
//     };
// }
// rememberMyFilms();

// function detectionPersonalLevel() {
//     if (personalMovieDB.count < 10 ) {
//         console.log('Watched quite a few movies');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('You are a classic viewer');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('You are a movie fan!');
//     } else {
//         console.log('Error');
//     }
// }
// detectionPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
// }
// showMyDB(personalMovieDB.private);


// function writeYourGanres () {
//     for(let i = 1; i <= 3; i++){
//         const favouriteFilm = prompt(`Your favourite ganre ${i}?`, '').trim();
//         if (isNaN(favouriteFilm)) {
//             personalMovieDB.ganres [i-1] = favouriteFilm ;
//         } else {
//             i--;
//         }
        

//     };
// }
// writeYourGanres ();

// 2й  варикант зарписи функции writeYourGanres если не использовать запрет на ввод чисел
// function writeYourGanres () {
//     for(let i = 1; i <= 3; i++){
//         personalMovieDB.ganres [i-1] = prompt(`Your favourite ganre ${i}?`, '');

//     };
// }
// writeYourGanres ();

// ======================================Рефакторинг кода с функций на методы=======================================================


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
//     start: function() {
//         personalMovieDB.count = +prompt('How many movies have you watched?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('How many movies have you watched?', '');
//         }

//     },
//     rememberMyFilms: function() {
//         for(let i = 0; i <2; i++){
//             const moviesWatched = prompt('last movie you watched?', '').trim();
//             const raitingOfFilm = prompt('Rate this movie', '').trim();
        
//             if (moviesWatched !=null && raitingOfFilm != null && moviesWatched != '' && raitingOfFilm != "" && moviesWatched.length < 50 && raitingOfFilm.length < 50) {
//                 personalMovieDB.movies[moviesWatched] = raitingOfFilm;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             };
        
//         };        
    
//     },
//     detectionPersonalLevel: function() {
//         if (personalMovieDB.count < 10 ) {
//             console.log('Watched quite a few movies');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('You are a classic viewer');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('You are a movie fan!');
//         } else {
//             console.log('Error');
//         }
//     },
   
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB)
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.private) {
//             personalMovieDB.private = false;
//         }else{
//             personalMovieDB.private = true;
//         }
//     },
    
//     writeYourGenres: function () {
//         for(let i = 1; i <= 3; i++){
//             const favouriteFilm = prompt(`Your favourite genre ${i}?`, '');
//             if (isNaN(favouriteFilm) && favouriteFilm != null && favouriteFilm != "" && favouriteFilm != 0) {
//                 personalMovieDB.genres [i-1] = favouriteFilm ;
//             } else { 
//                 console.log('Wrong data')
//                 i--;
                
//             }
            
//         }personalMovieDB.genres.forEach(function(item, i){
//             console.log(`Favourite genre #${i + 1} is - ${item}`); 
        
//         });
//     }   
// };     
// еще способ для writeYourGenres как выполнить этот метод ввeдя все жанры через запятую и с циколм что запустится только один раз

//     writeYourGenres: function () {    
//         for(let i = 1; i < 2; i++){
//             let favouriteFilm = prompt(`Enter your favourite genres separated by commas`).toLowerCase();
//             if (isNaN(favouriteFilm) && favouriteFilm != null && favouriteFilm != "" && favouriteFilm != 0) {
//                 personalMovieDB.genres = favouriteFilm.split(', ');
//                 personalMovieDB.genres.sort();
//             } else { 
//                 console.log('Wrong data')
//                 i--;
                
//             }
            
//         }personalMovieDB.genres.forEach(function(item, i){
//             console.log(`Favourite genre #${i + 1} is - ${item}`);   

//     });
        
        
//     }
    
// };
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectionPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.private);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();
// -----------------------------пример для обучения консоли в браузере------------------------------
// function hello() {
//     console.log('Hello World');
// }
// hello();

// function hi() {
//     console.log('Say ho!');
// }

// hi();

// const arr = [1, 14, 4, 30, 53],
//     sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }    
// console.log(sorted);
// -------------------------------------------------------------------------------------------------

// Динамическая типизация!


//To String

// 1) оператор String используется редко он старый и неудобно, канкатинация удобнее на много
// console.log(typeof(String(null)));
// console.log(String(null));
// console.log(typeof(String(4)));
// console.log(String(4));
// 2)используется часто - канкатинация
// console.log(typeof(5 + '')); //канкатинация

// const num = 5;
// console.log("https://vk,com/catalog/" + num);

// const fontSize = 26 + 'px';


//To Number

// 1) оператор Number используется редко еще реже он старый
// console.log(typeof(Number('5')));
// console.log(Number('5'));

// 2)унарный плюс, намного чеще используется и удобнее чем оператор Number

// console.log(typeof(+'5'));
// // 3)
// console.log(typeof(parseInt('15px', 10)));//метод parseInt превращает число в другую систему исчисления

// let answer = +prompt('Hello', "");
// console.log(answer)


// function learnJavaScript() {
//   const stringToNumber = function(str) {
//     return +str;
//   }
//   return stringToNumber('999')
  
// }
// learnJavaScript();
// console.log(learnJavaScript());
// console.log(typeof(learnJavaScript()));



// To Boolean

// 0, '', null, undefined, NaN; - это все false
// Все остальное даже пустые массивы и пустые объекты - это все true

// 1)

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// 2)

// console.log(typeof(Boolean('5')));//это способ используют очень редко ведь удобнее прнобразование выше и больше можно с него сделать всего
// 3)

// console.log(typeof(!!"44444"));


// --------------------------Замыкание и лексическое окружение---------------------------
// let number = 5; debugger

// function logNumber(){
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

// -------------------------------------------------------------------------------------------
// let number = 5; debugger

// function logNumber(){
    
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger
// -----------------------------------------------------------------------------------------------
// let number = 5; debugger

// function logNumber(){
    
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger
// ------------------------------------------------------------------------------------------------

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {debugger
//         counter = counter + 1; debugger
//         return counter;debugger
//     }

//     return myFunction;
// }
// debugger
// const increment = createCounter();debugger
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger

// console.log(c1, c2, c3);

// Задачки на понимание
// 1) let x = 5; alert( x++ ); Инкремент выведет значение старое 5 а вот декремент ++х выведет сразу новое значение 6 

// let x = 5; 
// console.log( x++ );//console.log( --x )
// console.log( x );

// 2) let d = [ ] + false - null + true;//в таких операциях пустой массив будет приведен к строковому типу даних [ ] + false = "false" - строка
// console.log(d);

// 3) let y = 1; 
// let x = y = 2; 
// alert(x);

// 4) let m = [ ] + 1 + 2
// console.log(typeof(m));

// 5) console.log(typeof("1"[0])); //к какождому элементу строки можна обратиться по его символу в этом случае мы обращаемся по нулевой вимвол, а нулевой символ = "1"

// 6) console.log(2 && 1 && null && 0 && undefined ); //оператор и запинается на лжи

// 7) console.log(!!( 1 && 2 ) === (1 && 2));

// 8)console.log( null || 2 && 3 || 4 ); // И у нас выше по приоритетности чем или. Оператор или запинается на правде 

// 9) const a = [1, 2, 3];
//    const b = [1, 2, 3];
//    console.log(a === b); //у нас а и б это два разных ящика с обинаковым набором внутири, и потому что это именно 2 разных ящика а не будет равнятьс b

// 10) console.log( +"Infinity" ); //Выдаст Infinity но не строку а намбер

// 11) console.log("Ёжик" > "яблоко"); //идет посимвольное сравнение по unicode, где каждому символу присвоено значение по порядку

// 12) console.log(0 || "1" || 2 || undefined || true || fals)

