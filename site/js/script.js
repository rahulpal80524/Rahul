/****
 var message="in global";

 console.log("global:message = " + message);
  var a = function () {

 	var message = "inside a";

 	console.log("a:message = " + message);

 	function b (){

 	console.log("b: message = " + message);

 }

 	b();

 }

 a();****/


/****
var x;
console.log(x);
if (x==undefined) {
	console.log("x is undefined");
}

x=5;
if (x == undefined){
	console.log("x is undefined");
}
else {
	console.log("x has been defined")
}  ****/


/****
var string = "hello";
string += "world";
console.log(string + "!");
****/



/*Regular math operators: +,-,*,/ */
/*
console.log((5+4)/3);
console.log(undefined/5);

function test1(a) {
	// body...
	console.log(a/5);
}
test1();
*/

// Equality
/*
var x = 4 ,y=4;
if (x==y) {
	console.log("x=4 equal to y=4");
} 

x="4";
if (x==y) {
	console.log("x=4 is equal to y=4");
}
*/



// Strict equality
/*var x=4 ,y=4;
if ( x==y) {
	console.log("Strict: x=4 is equal to y=4");
}
else {
 console.log("Strict x='4' is NOT equal to y=4" );

}
*/



/****If statement (all false)****/

/*if (false || null || undefined || "" || 0 || NaN) {
	console.log("this line won't ever exccute");
}
else {
	console.log("All false");
}
*/

/****If statement (all false)****/
/*
if (true && "hello" && 1 && -1 && "false") {
	console.log("All true");
}
*/

/***
 //good practice

function a(){
	return
	{
		name : "Rahul"
	};
}
function b(){
	return {
		name : "pal"
	};
}
console.log(a());
console.log(b());

  ***/
  


//For loop
/**
 
 var sum =0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum+=i;

}
console.log("Sum of 0 through 9 is: " +sum);



 **/

 
/**
 
 function orderChickenWith(sideDish) {
 	sideDish = sideDish || "whatever!"
 	console.log("Chicken with " +sideDish);
 }
 orderChickenWith("noodles");
 orderChickenWith();

  **/
 /***
 //Object creation
 var company = new Object();
 company.name = "facebook";
 //console.log(company); 
 company.ceo = new Object;
 company.ceo.firstname="mark";
 company.ceo.favcolor ="blue";

 console.log(company);
 console.log("company CEO name is: " + company.ceo.firstname);

 console.log(company["name"]);
var stockpropname = "stock of company";
company[stockpropname]=110;
//company.$stock = 110;
//company["stock of company"] = 110;
console.log.("Stock price is : " + 
	company[stockpropname]);
 
***/

//Better way: ojecet literal
/**
 
 var facebook = {
	name:"Facebook",
	ceo: {
		firstname:"rahul",
		favcolor:"blue"
	},
	"stock of company":110
};


console.log(facebook.ceo.firstname);

 **/
 
 //function are first-class data
 /*
function multiply(x,y){
 	return x*y;
 }
console.log(multiply(5,4));
multiply.version = "v.1.0.0";
console.log(multiply.version);


 */


//function factory
/**
 
function makeMultiplier(multiplier){
	var myFunc = function(x) {
		return multiplier * x;
	};
	return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//Passing function as arguments
function doOperationOn(x,operation){
	return operation(x);
}
var result = doOperationOn (5,multiplyBy3);
console.log(result);
result = doOperationOn(100,doubleAll);

 **/


 //copy by reference vs by value

/*

var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: "+ b);

b = 5;
console.log("after b updates");
console.log("a: "+a);
console.log("b: "+b);



*/


//pass by reference
/*

var a = {x:7};
var b = a;
console.log(a);
console.log(b);
b.x = 5;
console.log("after b.x updates:");
console.log(a);
console.log(b);


*/


//pass by reference vs by value
/*

function changePrimitive(primValue){
	console.log("in changePrimtive...");
	console.log("before");
	console.log(primValue);

	primValue = 5;
	console.log("after:");
	console.log(primValue);
}

var value = 7;
changePrimitive(value);
console.log("after chagePrimitive,orig value:");
console.log(value);


*/

/*


function changeObject(objValue){

	console.log("in changeObject....");
	console.log("before");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value = {x:7};
changeObject(value);
console.log("after changeObject, orig value");
console.log(value);


*/

