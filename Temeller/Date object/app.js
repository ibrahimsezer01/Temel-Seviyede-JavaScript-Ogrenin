let value;

const now = new Date();     //  Şuanki tarihi atar...

const date1 = new Date("6-16-2002 18:00:00");
const date2 = new Date("July 16 2002");
const date3 = new Date("6/16/2002");

value = date2;

value = date1.getMonth();       // 6.cı ayı getirir fakat 5 diye yazar sıfırdan başladığı için
value = date1.getDate();        // Günü getiri (1 den başlar)
value = date1.getDay();         // 0'dan başlar günün değerini getirir 16 pazar gününe denk geldiği için 0 yazdırır

value = date1.getHours();
value = date1.getMinutes(); 
value = date1.getSeconds();
value = date1.getMilliseconds();  


date1.setDate(8);           // set komutu ile var olan değeri değiştirebiliriz
date1.setMonth(7);         
date1.setFullYear(1675);  
date1.setHours(22);
date1.setMinutes(15);
date1.setSeconds(30);

console.log(value);