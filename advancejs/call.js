const setusername=function(username){
    this.username=username;
}

function createuser(username,age,email){
    setusername.call(username); //call help to send the exe. context to the function
    this.age=age;
    this.email=email;
}

const user1=new createuser("mayank",21,"shahimayank10");

console.log(user1);