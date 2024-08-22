// variable
// var 
var a = 10
var b = 20
var total = a + b
console.log(total);
// let 
{
          let a = 10
          console.log(a);
}
// const
{
          const a = 10
          console.log(a);
          a = 20;
          console.log(a)
}


// datatype --> str num null undefined boolean
var a;
console.log(typeof (a))

// condition 
var color = "red";
if (color == "red") {
          console.log("stop");
}
else if (color == "yellow") {
          console.log("ready");
}
else if (color == "green") {
          console.log("go")
}
// for  
for (let i = 0; i <= 10; i + 2) {
          console.log(i)
}
// while
let i = 20;
let a = parseInt(prompt("enter a"))
while (i <= a) {

          console.log(i)
          i++;
}
// boolean
var rain = true;
if (rain) {
          console.log("njoy")
}
else {
          console.log("sad")
}
// function 
function add() {
          console.log("hello")
}
add()
// parameter
function add(a, b) {
          c = a + b;
          console.log(c)
}
add(1, 3)
// return
function add(a, b) {
          c = a + b;
          return c;
}
add(1, 3)
var t = c;
console.log(c);

// logical 
// and && or || not !

console.log(true&&true)
console.log(true||false)
console.log(!false)
