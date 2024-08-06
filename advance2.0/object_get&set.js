const User={
_name:"mayank",
_password:"abc",

get name(){
    return this._name.toUpperCase;
},

set name(val){
this._name=val;
}

}

const ms=Object.create(User);
console.log(ms.name);
