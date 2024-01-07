let value;

const value1 = 10;
const value2 = 4;
const value3 = 12.123123;

// Aritmetik Operatörler

/* 
value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;
*/

value = Math.E;     // Log(E) sayısını yazar
value = Math.PI;    // Pi sayısını yazar

value = Math.round(3.6);    // Yukarı yani 4'e yuvarlayacak
value = Math.round(3.5);    // Yukarı yani 4'e yuvarlayacak
value = Math.round(3.4);    // Aşşağı yani 3'e yuvarlayacak

value = Math.ceil(3.1);     // Daima yukarı yuvarlar yani 4'e
value = Math.floor(3.1);    // Daima aşşağı yuvarlar yani 3'e

value = Math.sqrt(16);      // Karekök hesabı yapar
value = Math.sqrt(27);      // Karekök hesabı yapar

value = Math.abs(-22);      // Sayının mutlak değerini alır

value = Math.pow(4,4);      // 4'ün 4 kuvettini alır (4*4*4*4)
value = Math.pow(2,2);      // 2'ün 2 kuvettini alır (2*2)

value = Math.max(10,-10,40,20);     // Barındırdığı sayılardan en yükseğini alır
value = Math.min(10,-10,40,20);     // Barındırdığı sayılardan en düşüğünü alır

value = Math.random();          // 0 ile 1 arasında random sayı atar (1 dahil değil)
value = Math.random() * 20;     // 0 ile 20 arasında random sayı atar (20 dahil değil)
value = Math.random() * 20 + 2  // 2 ile 22 arasında randım sayı atar (22 dahil değil)

value = Math.floor(Math.random() * 20 + 2)
// 2 ile 22 arasında bi üst sayıya yuvarlayarak random sayı atar


// Ekstralar


value = isNaN("10a");            // sayı değilmi diye sorgular değilse true, sayı ise false
value = value3.toPrecision(3);   // sayının şu kadar hanesini falan getir diye bi komut işte
//toFixed diye bişey var anlamadım


console.log(value);