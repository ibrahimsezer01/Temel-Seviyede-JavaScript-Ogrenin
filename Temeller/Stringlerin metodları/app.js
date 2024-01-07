let value;

const cumle = "Ben üst düzey bir yazilimci olacam"
const firstname = "Louis"
const lastname = "Armstrong"    
const langs = "Java,Phyton,C++"

value = firstname + " " + lastname;
value += " html-css"; // value = value + " html-css"


value = firstname.length;   // firstname değişkeninin uzunluğunu value değşkenine atar

value = firstname.concat(" ",lastname," ","java");


value = firstname.toUpperCase();    // Büyük harflerle yazdırır
value = firstname.toLowerCase();    // Küçük harflerle yazdırır


value = firstname[0];   // sıfırıncı elemanı yani L harfi yazılır
value = firstname[3];   // üçüncü elemanı i harfi yazılır


value = firstname[firstname.length - 1];    // Son karakteri bulmak için


// İndex of

value = firstname.indexOf("L");     // L harfi varsa eğer kaçıncı sırada olduğunu belirtir (kelime de yazdırabiliriz)
value = firstname.indexOf("i");     // i harfi varsa eğer kaçıncı sırada olduğunu belirtir
value = firstname.indexOf("l");     // (küçük L) l olmadığı için -1 değerini atar


// charAt

value = firstname.charAt(0);    // sıfırncı harfi çağırır
value = firstname.charAt(firstname.length - 1);     // son harfi bulma yöntemi


// split

value = langs.split(",");   // Virgül gördüğü anda parçala yani elemanları birbirinden ayırır
value = langs.split(" ");   // kelimeleri bir diziye çevirir ve value içine atar

//  Replace

value = langs.replace("Phyton","Css");  //  Phyton olan yazıyı Css ile değiştirmesini söyledik


// includes

value = langs.includes("Java");     // Java kelimesi bulunursa true olarak dönecektir
value = langs.includes("React");    // React bulunmadığından doları false olarak döner


// StartsWith and EndWith

value = firstname.startsWith("Lou");    // firstname Lou ile başlıyor mu diye true veya false değeri verir
value = firstname.endsWith("Lou");      // firsname Lou ile bitiyor mu diye true veya false değeri verir



console.log(value);