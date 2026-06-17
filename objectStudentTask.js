// var student ={
//     name:"ajink",
//     age:"28",
//     address: "agra",
//     email: "guluglu@gmail.com",

//     eligibeForVote: true,

//     skills: ["html","css","js"],

// printskills:function () {
// console.log(this.skills);
// },
// printadd: function () {
// console.log(this.address);

// },

// printvote: function (){
// console.log(this.eligibeForVote);
// }
// }

// for(var k in student ){
//    console.log(k + ":", student[k]); 

// }

// An array containing three employee objects
// var employees = [
//     {
//         id: 101,
//         name: "murga",
//         role: "Developer",
//         salary: 60000
//     },
//     {
//         id: 102,
//         name: "ajink",
//         role: "Designer",
//         salary: 55000
//     },
//     {
//         id: 103,
//         name: "bhadu",
//         role: "Manager",
//         salary: 80000
//     }
// ];

// for (var i = 0; i < employees.length; i++) {
//     console.log("ID:", employees[i].id, "| Name:", employees[i].name);
// }

// employees.forEach(function(emp) {
//     console.log(emp.name + " works as a " + emp.role);
// });


// function printemp(empgiver){
//     var dull=empgiver()
//       for(var k in dull){
//         console.log(k)
//       }
// }

// function listofemp(){
//     return ["ajink","abhishek","murga","madhur"]
// }

// printemp(listofemp)

var numb=[1,2,3,4,5,6,7,8,9,10]

var sqnum= numb.map(function(x){
    return x*x
})

console.log(sqnum)

var evennum=numb.filter(function(x){
    if(x%2==0){
        return x
    }
})

console.log(evennum)

var sumnum=numb.reduce(function(x, y){
    return x+y*y
})

console.log(sumnum)

