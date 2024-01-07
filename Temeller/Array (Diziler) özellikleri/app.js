let value;

// const numbers = new Array[54,65,71,97,32,23,11 ];

const numbers = [54,65,71,97,97,23,11];

const langs = ["Phyton","Java","C++","JavaScript"];

const a = ["Hello",22,null,undefined,3.14];

value = numbers.length;

value = numbers[0];
value = numbers[3];
value = numbers[numbers.length - 1];

numbers[2] = 1000;

value = numbers;

value = numbers.indexOf(1000);

numbers.push(2000);                   // dizi sonuna değer atar

value = numbers;

numbers.unshift(3000);                // dizi başına değer atar

value = numbers;

numbers.pop();                        // sondaki değeri siler

value = numbers

numbers.shift();                       // başındaki elemanı siler

value = numbers;

numbers.splice(0,3);                 // aradakileri atar 0,1,2 elamanları 3 dahil değil

value = numbers;

numbers.reverse();                   // elemanları ters sıralar

value = numbers;

numbers.sort();                         // elemanların ilk rakamına bakarak küçükten büyüğe sıralar

value = numbers;

value = numbers.sort(function(x,y){    // Küçükten büyüğe
    return x - y;
})

value = numbers;

value = numbers.sort(function(x,y){    // Büyükten küçüğe 
    return y - x;
})

value = numbers;


// console.log(value);


// Sadık Turan hocamdan

let ogrenciler1 = ["ahmet","veli","irmakli"];
let ogrenciler2 = ["samet","gungor","aytekin"];
let sonuc;

sonuc = ogrenciler1.join(" ");              // her bi elemanın arasına boşluk bırakarak dizide ki tüm elemanları bir string verisi altında toplar

sonuc = ogrenciler1.concat(ogrenciler2);    // iki dizi birleştirip tek dizi halinde yazdırır

ogrenciler1.splice(0, 0, "eklenen veri");   // sonuc = ogrenciler1.splice(0, 0, "eklenen veri"); şeklinde yazılsaydı eğer splice metodunun dönüş değeri
sonuc = ogrenciler1;                        // silinen elemanların bir dizisidir. Eğer hiçbir eleman silinmediyse, yani deleteCount parametresi 0 ise
ogrenciler1 = ["ahmet","veli","irmakli"];   // veya eleman eklemek amaçlı kullanıldıysa, splice metodunun dönüş değeri boş bir dizi (`[]`) olacaktır.



console.log(sonuc);