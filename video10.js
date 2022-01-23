  function  greet(name){
      console.log(`The greeting at Mass: A welcome ${name} into the very life of God`);
  }

  let name = 'rahul';
  greet(name);

//defailt and return argument
  function greetss(name1,greets="thank you"){
   let value=console.log(`The greeting at Mass: A welcome ${name1} into the very life of God ${greets}`);
   return value;
}

let name1 = 'rahul';
greetss(name1);


const myobj = {
    name : 'rahull',
    game : function(){
        return "GTA";
    }

}

console.log(myobj.game());
