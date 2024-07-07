// Object Literals

const sym=Symbol("k")

const obj={
    name:"mayank",
    college:"IMS",
    [sym]:"keys",
    Subject:"js",
    age:21
}

const newobj=obj;

newobj.name="prateek";

console.log(obj);

console.log(obj["name"]);

console.log(obj.name);

console.log(obj[sym]);     //only way to access symbol


Object.freeze(obj)
newobj.age=22;

// no change in age...both object got freeze
console.log(obj);
console.log(newobj);