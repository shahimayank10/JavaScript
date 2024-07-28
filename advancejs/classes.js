class user{
    constructor(username,password,age){
        this.username=username,
        this.age=age,
        this.password=password
    }

        encriptpassword(){
            return `${this.password}abc`;
        }
}

const user1=new user("mayank","123",21);

console.log(user1.encriptpassword());