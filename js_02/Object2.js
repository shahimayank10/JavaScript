const user1={
    name1:"mayank",
    email1:"mayank@gmail.com",
    age1:21
}

const user2={
    name2:"priyanshu",
    email2:"priyanshu@gmail.com",
    age2:22
}

const combine = {...user1, ...user2};

console.log(combine);

const merge= Object.assign({},user1,user2)
// Object.assign(target,source)
// const merge= Object.assign(user1,user2)
// in this case use1=merge( both have data of user1,user2)


console.log(merge);

console.log(Object.keys(merge));    
   //[ 'name1', 'email1', 'age1', 'name2', 'email2', 'age2' ]

console.log(Object.values(merge));  //print values

console.log(Object.entries(merge));  //print each property in array
                                     // [ 'name1', 'mayank' ]

// object de-structuring

const cource={
    id:222,
    courceinstructor:"Hitesh",
    topic:"MERN"
}

const {topic : heading}=cource;
// console.log(topic);
console.log(heading);
