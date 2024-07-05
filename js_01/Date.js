const newdate=new Date();

console.log(typeof newdate); //object

console.log(newdate);        //2024-07-05T16:00:08.645Z

console.log(newdate.toString());  //Fri Jul 05 2024 16:00:50 GMT+0000 

console.log(newdate.toLocaleString());     // 7/5/2024, 4:02:19 PM

console.log(newdate.toLocaleDateString());  // 7/5/2024

const myCreatedDate=new Date(2024,4,3);

console.log(myCreatedDate.toDateString());  //Fri May 03 2024

const newCreatedDate1=new Date("2024-07-05");  //yy-mm-dd
const newCreatedDate2=new Date("07-05-2024");  //mm-dd-yy

console.log(newCreatedDate1.toDateString());
console.log(newCreatedDate2.toDateString());


//-----------------IMP---------------------------------

const current=Date.now();

console.log(current); //time in millisec

console.log(newCreatedDate2.getTime());

console.log(newCreatedDate2.getDay());

console.log(Math.floor(Date.now()/100));

current.toLocaleString('default', {
    weekday:"long"
});
 

