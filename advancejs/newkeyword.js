function multiply(num){
    return num*6;
    }
    
    // console.log(multiply.prototype);             output:{}
    
    function user(name,age){
        this.name=name;
        this.age=age;
    }
    
    
    user.prototype.print=function(){
        console.log(`age of ${this.name} is ${this.age} `);
        // return `age of ${this.name} is ${this.age} `;
    }
    
    // ****new keyword create an empty object 
    // ****object get linked with the prototype of constructor function
    // ****constructor is called
    // ****new object is returned
    
    const userone=new user("mayank",21)   
    const usertwo=new user("prateek",21)
    
    console.log(userone.print());
    console.log(multiply.prototype); 