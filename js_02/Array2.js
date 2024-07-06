const arr=[1,2,[3,4],[5,6,7],8];

console.log(arr.flat());    // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(Array.isArray(arr));  //true

console.log(Array.from("mayank")); //[ 'm', 'a', 'y', 'a', 'n', 'k' ]

const name=[ 'm', 'a', 'y', 'a', 'n', 'k' ]

console.log(name.join(''));   //mayank