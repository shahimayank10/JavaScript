const superhero=["captain america", "iron man","Dr. strange"];

const superpower={
    capatain:"all abilities",
    ironman:"fly",
    drstrange:"time travel",

    getcaptainpower: function(){
    console.log(this.capatain);
    console.log(this);
    }

}

Object.prototype.mayank=function(){      //set prototype in object now it could be 
    console.log("hi i am mayank");       //access by array,string,func and object
}

// console.log(superpower.mayank());
// console.log(superhero.mayank());

Array.prototype.prateek=function(){       //only access by array
    console.log("hi i am prateek");
}


console.log(superhero.prateek());



const engine={
    horcepower:220,
    topspeed:300
}

const audiR8={
    color:"yellow",
    // __proto__:engine
}

console.log(audiR8.color)

audiR8.__proto__=engine;
// modern syntax 
// Object.getPrototypeOf(audiR8 , engine)

console.log(audiR8.horcepower)  
console.log(audiR8.topspeed)  