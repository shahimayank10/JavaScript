class mahindra{
    constructor(carname){
        this.carname=carname;
        console.log(this)
        
    }

    start(){
        console.log(`${this.carname} get start`)
    }
}

class car extends mahindra{
    constructor(carname,price){
        super(carname);
        this.price=price;
    }

    buy(){
        console.log(`${this.carname} price is ${this.price}`);
    }
}

const car1=new car("scorpio","17 lakh");
const car2=new car("thar","15 lakh");
const car3=new mahindra("thar");


console.log(car1);
console.log(car1.start());
console.log(car1.buy());
console.log(car.__proto__);          //[class mahindra]
console.log(mahindra.__proto__);     //{}

console.log(mahindra instanceof car);    //false


console.log(car1 instanceof car);          //true
console.log(car1 instanceof mahindra);       //true

console.log(car3 instanceof car);             //false
console.log(car3 instanceof mahindra);          //true




// function obj(name,age){
// this.name=name,
// this.age=age,                  can't define hi() function here
// }

// obj.prototype.hi=function(){
//                console.log("hi");
//                  }

// const obj1=new obj("ms",21);

// console.log(obj);
// console.log(obj1);
// console.log(obj1.hi())

