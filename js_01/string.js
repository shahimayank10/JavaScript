// var name="mayank";
// name[2]='a';
// console.log(name);   output: mayank(no change) strings are immutable

// const newname= new String("mayank");  
// console.log(typeof(newname));   output:Object


// methods in String

var str="Congratulations";

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(2));

var str2="everyone";

console.log(str2.slice(2,6));

var ans=str.concat(" ",str2);
console.log(ans);

console.log(str.replace("Congr","xx"))


var uname="    kkk  "
console.log(uname.trim());

// imp-> convert string into array
console.log(str.split(''));











