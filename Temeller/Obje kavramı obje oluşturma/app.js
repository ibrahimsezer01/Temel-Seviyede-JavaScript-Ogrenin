const programmer = {
    name : "İbrahim sezer",
    age : 21,
    email : "ibosezerpro@gmail.com",
    langs : ["Phyton","Java","Css"],

    address : {
        city : "Ankara",
        street : "Keçiören"
    },

    work : function() {
        console.log("Programcı çalişiyor...");
    }
}


value = programmer;

value = programmer.address;
value = programmer.address.city;

value = programmer["address"];

value = programmer.langs;

value = programmer.work();


const programmers = [
    {name : "ibrahim sezer", age : 21},
    {name : "Samet paket", age : 25}
];

value = programmers[0].name;
value = programmers[1].age;
value = programmers;


console.log(value);