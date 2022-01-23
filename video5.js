// Type Conversion And Coercion
console.log('Welconm to Js');
let myVar;
myVar = 34;
console.log(myVar,(typeof myVar));
myVar  = String(34); 
console.log(myVar,(typeof myVar));

let boolean = String(true);
console.log(boolean,(typeof boolean));

let date = new Date();
console.log(date,(typeof date));

console.log(String((typeof date)));

let arr = String([1,2,3,4,5,7]);
console.log((typeof arr));

let numbers= 45;
console.log(numbers.toString);

let numbers1 = parseInt('23.53');
console.log(numbers1);
let numbers2 = parseFloat('23.43456');
console.log(numbers2);
console.log(numbers2.toFixed(3));



