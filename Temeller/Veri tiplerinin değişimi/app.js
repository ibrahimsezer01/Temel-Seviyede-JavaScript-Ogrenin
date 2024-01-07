let value;

// Veri tiplerini stringe çevirme

/*
value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4])

value = (10).toString();
value = (3.14).toString();

console.log(value);
console.log(typeof value); 
*/

// Veri tiplerini sayılara çevirme

value = Number("123");
value = Number(null);
value = Number(undefined);                  // tanımsız (not a number)
value = Number("Hello java");               // Sayısal değer olmadığı için tanımsız (NaN)
value = Number(function(){console.log()})   // Fonksiyonu sayısal değere çeviremez (NaN)
value = Number([1,2,3,4,5,]);               // Dizileri sayısal değere çeviremez (NaN)

value = Number("3.14");                     // Hepsini alır
value = parseFloat("3.14");                 // Ondalıklı değeri de alır
value = parseInt("3");                      // Ondalıklı değerleri almaz

const a = "Java " + 7;                      // String bi ifade olarak çıktı verir


console.log(value);
console.log(typeof value); 


console.log(a);
console.log(typeof a); 


const x = 23 + 33;                          // Bu şekilde number olarak tanıtılır

console.log(x);
console.log(typeof x); 

const y = "43" + 11;                        // Bu şekilde string olarak tanıtılır

console.log(y);
console.log(typeof y); 


const z = Number("31") + String(22);         // Bu şekilde biri number ve diğeri string olarak tanımlanırsa çıktısı string oluşur

console.log(z);
console.log(typeof z); 


const c = Number("43") + 11;                // Bu şekilde number olarak tanıtılır

console.log(c);
console.log(typeof c); 