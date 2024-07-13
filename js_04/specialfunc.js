const arr=["apple","banana","mango","lichi","grapes"];

const obj={
    name:"mayank",
    age:21,
    cource:"JS",
}

arr.forEach( (val)=> {
console.log(val);
});               //forEach never returns the value

// -----------map-------------

const newarr= arr.map((val)=>{ 
    return val;
});
console.log(newarr);

// -----------filter-------------

const newarr2= arr.filter((val)=>{ 
    return val.length>5;
});
console.log(newarr2);

// -----------reduce-------------

const arr3=[2,3,4,5]

const sum= arr3.reduce((acc,curr)=>{
     return acc+curr;
    },1);
console.log(sum);


