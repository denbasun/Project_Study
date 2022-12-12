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
// -----------------------------------------------------------------------
// const numberOfFilms = +prompt('How much films did you seen?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     ganres: [],
//     private: false
// };

// const moviesWatched = prompt('Last film you seen', '');
// const raitingOfFilm = prompt('Raiting of this film', '');
// const moviesWatched2 = prompt('Last film you seen', '');
// const raitingOfFilm2 = prompt('Raiting of this film', '');

// personalMovieDB.movies[moviesWatched] = raitingOfFilm;
// personalMovieDB.movies[moviesWatched2] = raitingOfFilm2;

// console.log(personalMovieDB);

// ------------------------------------------------------------------------

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

for (let i = 1;  i < 8; i++) {
    if (i === 3 ) {
        continue;
    }
    console.log(i);
}

