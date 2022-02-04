"use strict";

var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody); // Adding the entire table to the body tag

document.getElementById('body').appendChild(table); // Creating and adding data to first row of the table

var row_1 = document.createElement('tr');
var heading_1 = document.createElement('td'); // ('th') - heading

heading_1.innerHTML = "1";
var heading_2 = document.createElement('td');
heading_2.innerHTML = "2";
var heading_3 = document.createElement('td');
heading_3.innerHTML = "3";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1); // Creating and adding data to second row of the table

var row_2 = document.createElement('tr');
var row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "4";
var row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "5";
var row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "6";
row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2); // Creating and adding data to third row of the table

var row_3 = document.createElement('tr');
var row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "7";
var row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "8";
var row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "9";
row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);
/*Вложенные циклы
Задача 1. Создайте таблицу из 6 строк и 4 столбцов 
с пронумерованными ячейками в ней.*/