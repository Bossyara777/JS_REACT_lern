"use strict";

/*for(let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = "./images/car1.jpg", "./images/car2.jpg"; 
    //img.src = "./images/car2.jpg";
    //img.src = "./images/car3.jpg"; 

    document.body.appendChild(img);
 }*/
window.onload = function () {
  var fotos = new Array(17);
  fotos[0] = "./images/car1.jpg";
  fotos[1] = "./images/car2.jpg";
  fotos[2] = "./images/car3.jpg";
  fotos[3] = "./images/car4.jpg";
  fotos[4] = "./images/car5.jpg";
  fotos[5] = "./images/car6.jpg";
  fotos[6] = "./images/car7.jpg";
  fotos[7] = "./images/car8.jpg";
  fotos[8] = "./images/flower1.png";
  fotos[9] = "./images/flower2.png";
  fotos[10] = "./images/flower3.png";
  fotos[11] = "./images/flower4.png";
  fotos[12] = "./images/flower5.png";
  fotos[13] = "./images/flower6.png";
  fotos[14] = "./images/flower7.png";
  fotos[15] = "./images/flower8.png";
  var alts = new Array(16);
  alts[0] = "Авто1";
  alts[1] = "Авто2";
  alts[2] = "Авто3";
  alts[3] = "Авто4";
  alts[4] = "Авто5";
  alts[5] = "Авто6";
  alts[6] = "Авто7";
  alts[7] = "Авто8";
  alts[8] = "Цветок1";
  alts[9] = "Цветок2";
  alts[10] = "Цветок3";
  alts[11] = "Цветок4";
  alts[12] = "Цветок5";
  alts[13] = "Цветок6";
  alts[14] = "Цветок7";
  alts[15] = "Цветок8";

  for (i = 0; i < 15; i++) {
    var img = document.createElement('img');
    img.src = fotos[i];
    img.alt = alts[i];
    img.height = '120';
    img.width = '150';
    document.body.appendChild(img);
  }
};
/*Циклы
Задача 1. Вывести с помощью цикла 8-10 подобных изображений (цветы, автомобили, футболисты, игрушки, чашки), например, так:
Цветы в циклеАрхив с изображениями цветов вы можете скачать по ссылке. Также вы можете загрузить архив с изображениями машин.*/