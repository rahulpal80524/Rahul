let html = "rahul";
let greeting = "Good Morning";

html = html.concat(greeting," hello");
console.log(html);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[0]);
console.log(html.indexOf('h'));
console.log(html.lastIndexOf('a'));
console.log(html.charAt(2));
console.log(html.endsWith('hell')); 
console.log(html.includes('Mo')); //in string search Mo is includes or not 
console.log(html.substring(0,2)); //0 to 1 word print
console.log(html.slice(-4)); //reverse last 4 string 
console.log(html.split('r')); //in every r word point split 
console.log(html.replace('rahul','rahulpal '));//first rahul is change with rahulpal
let plus = `<h1>name</h1> ${html} ${greeting}`;
document.body.innerHTML = plus;