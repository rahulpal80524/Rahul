let marks = [23,45,15,75,14];
console.log(marks);
const fruits =  ['orange','apple','mango'];
console.log(fruits);
const mixed = ['name',34,42,[224,34]];
console.log(mixed);
const arrys = new Array(23,63,453,'orange');
console.log(arrys);
console.log(arrys[2]);
console.log(Array.isArray(arrys));//is Array or not check 
arrys[0]='pal';
console.log(arrys);

let value  = marks.indexOf(45);//return index of 45 number
console.log(value);
marks.push(242); //put in end of array
marks.unshift(24);// put in starting of arry
marks.pop();//delete one element in last
marks.shift();//delete one element from starting of the Array
marks.splice(1,2);//1 means index 1 to start and 2 means element remove
marks.reverse();//reverse array

let marks2 = [1,2,3,4];
marks=marks.concat(marks2); //error
console.log('marks are : ',marks); 

let myobject = {
    name :'rahul',
    age : '34',
    marks : [1,2,3,4]
}
console.log(myobject);
console.log(myobject['age']);
console.log(myobject.age);
