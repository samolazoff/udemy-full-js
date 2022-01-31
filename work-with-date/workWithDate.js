'use strict'

// const now=new Date(0);
// 1970-01-01T00:00:00.000Z reference point  

// const now=new Date();
//data now

const now=new Date();

// console.log(now.getFullYear()); 
// console.log(now.getMonth()); 
// console.log(now.getDate()); 
// console.log(now.getDay()); 

console.log(now.getTimezoneOffset());
// time zone difference in minutes

console.log(now.setHours(18));
//instal your time

let start =new Date();

for(let i=0;i<100000; i++){
    let some=i**3;
}
let end =new Date();
console.log(end - start);
//interval time