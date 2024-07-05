const amount=100;
console.log(amount);
console.log(typeof(amount));   // output:number

const no=new Number(100);
console.log(no);    //   output:[Number: 100] show it specifically number
console.log(typeof(no));  // output:Object
  

console.log(no.toString().length);

console.log(no.toFixed(3));


const maxi=Number.MAX_VALUE;
console.log(maxi);


// ---------------------Maths(library)--------------------------------

// console.log(Math.abs(-22));
// console.log(Math.PI);
// console.log(Math.sqrt(36));
// console.log(Math.ceil(3.33));
// console.log(Math.floor(3.33));

console.log(Math.random());  //always between 0 and 1

const min=1;
const max=6;
const generate=Math.floor(Math.random()*(max-min+1))+min;
console.log(generate);
