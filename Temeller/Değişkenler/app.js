// javascript'e object olarak görünen tüm veri tipleri referans veri tipleridir

// Değişkenler

/* var a = 10;
var b = 20;
var c = 40;

console.log(a,b,c); */



// Primitive

/* var a = 10;     // Number veri tipi otomatik olarak atılır
var b = 3.1;    // Number veri tipi otomatik olarak atılır

console.log(a,b);
console.log(typeof a);
console.log(typeof b);
 */



// String 

/* var name = "ibo";

console.log(name);
console.log(typeof name); */



// Boolean 

/* var a = true; // sadece true veya false değerlerini alabilir

console.log(typeof a); */



// Null ve Atanmamış değer

/* var a = null;
console.log(typeof a);

var b;
console.log(typeof b); */



// Diziler / Array  

/* var array = [1,2,3,4,5];

console.log(typeof array);
console.log(array);
console.log(array[4]); */


/* var person = {
    name : "ibrahim",
    age : 21
};

console.log(typeof person);
console.log(person); */


/* var date = new Date();
console.log(date);
console.log(typeof date); */


/* var hello = function() {
    console.log("hi");
}

console.log(hello);
console.log(typeof hello); */


var a = [1,2,3];
var b = a;

console.log(b)
console.log(typeof b);

a.push(4);

console.log(b);
console.log(typeof b);

b = 10;
console.log(b);
console.log(typeof b);