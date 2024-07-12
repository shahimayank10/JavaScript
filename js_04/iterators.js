const data=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

const obj = {
    "property1": "value1", 
    "property2": "value2", 
    "property": 9, 
  };

// for(let d in obj){
//     console.log(d);
// 	console.log(obj[d]);
// }

// for(let d of data){
//     console.log(d);   
// }


// -------------------maps-----------------------
// store value in key-value pairs
// can't iterate (for-in loop don't work with no error)
// in for-of loop key,value pair can define


console.log(typeof Map);    //function

const map=new Map();         
console.log(typeof map);       //object

map.set('cpp',"c++");
map.set('rb',"ruby");
map.set('js',"javascript");

// console.log(map); 
// Map(3) { 'cpp' => 'c++', 'rb' => 'ruby', 'js' => 'javascript' }

for(let i of map){
	console.log(i);
} 
// [ 'cpp', 'c++' ]
// [ 'rb', 'ruby' ]
// [ 'js', 'javascript' ]

for(let [key,value] of map){
	console.log(key, value);
}
//  cpp c++
//  rb ruby
//  js javascript