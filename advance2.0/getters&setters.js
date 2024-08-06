class login{
    constructor(email,password){
        this.email=email;
        this.password=password;
        }
   
    get email(){
        return this._email;
    }   
    
    set email(val){
        this._email=val+"gmail.com";
    }

    get password(){
        return this._password;
    }

    set password(val){
        this._password=val.toUpperCase();
    }
   
}

const user1=new login("shahimayank10","abc");

console.log(user1.email);
console.log(user1.password);