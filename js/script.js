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

//--------------------------
// const usdCurr = 28;
// const discount = 0.7;
// function convert (amount,  curr) {
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
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    private: false
};

function rememberMyFilms() {
    for(let i = 0; i <2; i++){
        const moviesWatched = prompt('last movie you watched?', '');
        const raitingOfFilm = prompt('Rate this movie', '');
    
        if (moviesWatched !=null && raitingOfFilm != null && moviesWatched != '' && raitingOfFilm != "" && moviesWatched.length < 50 && raitingOfFilm.length < 50) {
            personalMovieDB.movies[moviesWatched] = raitingOfFilm;
            console.log('done');
        } else {
            console.log('error');
            i--;
        };
    
    };
}
rememberMyFilms();

function detectionPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Watched quite a few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a movie fan!');
    } else {
        console.log('Error');
    }
}
detectionPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.private);


function writeYourGanres () {
    for(let i = 1; i <= 3; i++){
        const favouriteFilm = prompt(`Your favourite ganre ${i}?`, '');
        if (isNaN(favouriteFilm)) {
            personalMovieDB.ganres [i-1] = favouriteFilm ;
        } else {
            i--;
        }
        

    };
}
writeYourGanres ();

// // 2й  варикант зарписи функции writeYourGanres если не использовать запрет на ввод чисел
// function writeYourGanres () {
//     for(let i = 1; i <= 3; i++){
//         personalMovieDB.ganres [i-1] = prompt(`Your favourite ganre ${i}?`, '');

//     };
// }
// writeYourGanres ();



//-----------------------------------------------------------------






    