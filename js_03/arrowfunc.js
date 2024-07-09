const obj={
    name:"mayank",
    age:21,
    call: function(){
    //  console.log(`hi ${obj.name}`);
      console.log(`hi ${this.name}`);
      console.log(this);

    }
}

obj.call();

// console.log(this);   output=> {} , but in console it print window object


// -------------------------Arrow Function-----------------------------


const add=(n,m)=>{ return n+m};
const add2=(n,m)=>  n+m ;
const add3=(n,m)=>( n+m );

console.log(add(2,3));
console.log(add2(2,3));
console.log(add3(2,3));


// ------------IIFE------------------

// (function defination)(exe call);      "semicolon" is important

(function hi(){
  console.log("hi");
})();

( ()=>{
  console.log("hello");
} )();