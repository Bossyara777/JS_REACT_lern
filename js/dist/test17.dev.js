"use strict";

/*2a) let a = Number(1);
let n = Number(10);
let sum = 0;
 
while(a <= n){       
       sum+=a;  
       a++;
    }
alert(sum)*/

/*2b)let a = Number(1);
let n = Number(10);
let sum = 0;
 
for(let a = 1; a <= n; a++){       
       sum+=a;  
    }
alert(sum);

2c)*/
var a = Number(1);
var n = Number(10);
var sum = 0;

do {
  sum += a;
  a++;
} while (a <= n);

{}
alert(sum);
/*Задача 2. Подсчитайте сумму чисел в диапазоне от 1 до 10 с помощью цикла for, while и do...while.
Подсказка: в результате должно получиться 55.*/

/*var a = Number(prompt("введіть початок діапазону",""));
var n = Number(prompt("введіть кінець діапазону",""));
var sum = 0;
 
while(a <= n){       
       sum+=a;  
       a++;
    }
 
alert(sum)*/

/*for(let i=0; i<10; i++) {
    if(i===0 || i===9) {
    array[i]=1;
    }else {
        array[i]=0;
    }
}*/