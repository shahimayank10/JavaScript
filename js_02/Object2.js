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
