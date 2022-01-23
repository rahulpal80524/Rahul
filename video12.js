// let a = document;
// a = document.all;

// a = document.body;
// a= document.fonts[0];
// Array.from(a).forEach(function(element){
//     console.log(element);  
// })

// a = document.links;
// a = document.links.href;
// console.log(a);

// use document.images and document.scripts and print the list of images and scripts on an html page

// A=document.images;
// console.log(A);
// B = document.scripts;
// console.log(B);
// let Links =document.links['javascript'];
// console.log(Links); 

// let elementid = document.getElementById('child1');
// console.log(elementid);

// elementid = elementid.className;
// console.log(elementid);

// elementid = elementid.childNodes;
// elementid  = elementid.parentNode;
// console.log(elementid);

// elementid.style.color = 'red'; //color change by JS
// console.log(elementid);
// elementid.innerText = 'Rahul';  //text change by JS
// elementid.innerHTML = '<b>Rahul pal</b>'; //html change  by JS




// console.log(elementid);

// let sel = document.querySelector('#child1');// # id selector
// let sel = document.querySelector('.child'); // . class selector (child class first element)
// let sel = document.querySelector('div'); //any class or id first element select
// sel.style.color = 'green';
// console.log(sel);

// 2.Multi  Element selector
let element= document.getElementsByClassName('child');
element = document.getElementsByClassName('container');

// console.log(element[0].getElementsByClassName('child'));

element = document.getElementsByTagName('div');
console.log(element);   