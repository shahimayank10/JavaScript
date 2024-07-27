// constructor function 
function user(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id
 // console.log(this);         user { name: 'mayank', age: 21, id: 1 }
    
    // return this;
}


// "new" keyword make an empty instance ({}) 
const user1= new user("mayank",21,1);
const user2=new user("prateek",21,2);

console.log(user1);
console.log(user2);