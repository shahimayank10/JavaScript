const arr1=new Array(1,2,3,4,5);
const arr2=arr1;

arr1.push(9);

console.log(arr1);       //[ 1, 2, 3, 4, 5, 9 ]
console.log(arr2);       //[ 1, 2, 3, 4, 5, 9 ]

const arr=new Array(2,5,3,57,33);

console.log(typeof Array);    //Function
console.log(typeof arr);      //Object

arr.unshift(23);
console.log(arr);
arr.shift();
console.log(arr);


// array to string

const newarr=arr.join();

console.log(newarr);            //2,5,3,57,33
console.log(typeof newarr);     //string



