//  for(let i=0;i<=10;i++){
//      if(i%2==0)
//        console.log(i);
//  }




//  let i=0;
//  while(i<=10){
//      if(i%2==0)
//       console.log(i);
//       i++;
//  }



// let j = 0 ;
//  do{
//      if(j===9){
//          j++
//         //  break;
//         continue;
//      }
//      console.log(j);
//      j++;
//  }while(j<=10); 



// forEach Loop
let arr = [1,2,3,4,5,6,7];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
}); 


let obj = {
    name : "rahul",
    age : 23,
    lang : "javaScrip",
    course : "B.tech"

}

 for(let key in obj){
     console.log(`${key} value of ->  ${obj[key]}`); 
 }



