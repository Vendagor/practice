'use strict';

// Задание 1

let arr = [];

for (let i = 0; i < 3; i++) {

   arr[i] = +prompt('Введите любое число:', '');

}

//let max = Math.max.apply(null, arr);
//let min = Math.min.apply(null, arr);

//console.log(`Максимальное число: ${max}`);
//console.log(`Минимальное число: ${min}`);

let max = arr.reduce(function(a, b) {
   return Math.max(a, b);
});

let min = arr.reduce(function(a, b) {
   return Math.min(a, b);
});

console.log(`Максимальное число: ${max}`);
console.log(`Минимальное число: ${min}`);

// Задание 2

function tri(num){
   let star = '';
   for(let i = 1; i <= num; i++){
      star += " *";

      console.log(star);
   }
      return "Finished";
 }
 
 tri(6);

// Задание 3

 const season = {
    month: 0};

 function timePoreComptation() {
    if (season.month % 12 < 3) {
      console.log('Winter');
    } else if (season.month % 12 < 6) {
       console.log('Spring');
    } else if (season.month % 12 < 9) {
       console.log('Summer');
    } else {
       console.log('Autumn');
    }
 }
 season.month = 5;

 timePoreComptation();







