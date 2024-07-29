class user{
    constructor(name,age){
        this.name=name,
        this.age=age 
    }
    login(){
        console.log(`${this.name} of age ${this.age} login`);
    }

    static createid(){
     return 123;
    }
}


class student extends user{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}

const st1=new student("mayank",21,"javascript");

// st1.createid();    can't be accessable
st1.login();

console.log(st1.name);