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

for(let d in obj){
    console.log(d);
	console.log(obj[d]);
}

for(let d of data){
    console.log(d);   
}


// -------------------maps-----------------------