// function multiply(num){
// return num*6;
// }

// // console.log(multiply.prototype);             output:{}

// function user(name,age){
//     this.name=name;
//     this.age=age;
// }


// user.prototype.print=function(){
//     console.log(`age of ${this.name} is ${this.age} `);
//     // return `age of ${this.name} is ${this.age} `;
// }

// const userone=new user("mayank",21)
// const usertwo=new user("prateek",21)

// console.log(userone.print());
// console.log(multiply.prototype);  


const engine={
    horcepower:220,
    topspeed:300
}

const audiR8={
    color:"yellow"
}

console.log(audiR8.color)

audiR8.__proto__=engine;

console.log(audiR8.horcepower)  
console.log(audiR8.topspeed)  