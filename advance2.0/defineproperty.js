function user(email,password){
    this._email=email;       //imp
    this._password=password;

    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
            },
        set:function(val){
            this._password=val;
            }
    })
}

const mayank=new user("shahimayank10","abcxyz");
console.log(mayank.password);