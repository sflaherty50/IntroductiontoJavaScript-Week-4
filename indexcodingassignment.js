//1
var firstName = 'James';
var lastName = 'Jon';

function createFullName (firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}

createFullName(firstName, lastName);

//2

var fName = 'James';
var lName = 'Jon';
var arrowFullName = (a,b) => `${a} ${b}`;

console.log( arrowFullName(fName, lName));



//3

//a
setTimeout(()=>alert("Time is up"), 3000);

//b
let askAreWeThereYet = () => alert("Are we there yet?");
setInterval(askAreWeThereYet(), 3000);
setInterval(() => {
    askAreWeThereYet()
}, 3000);


//4

var unspliced = ["Cassandra", "Alejandro","William"];


function processSplicedValue(unsplicedArray,indextobespliced,mycallback)
{
    var splicedArray = unsplicedArray.splice(indextobespliced,1);
    mycallback(splicedArray);
}

function lengthofname(name){
    alert(name.len);
}

//A
processSplicedValue(unspliced,2,console.log);

//B
processSplicedValue(unspliced,0,alert);

//C
processSplicedValue(unspliced, 1, message => alert(message));

// //D
processSplicedValue(unspliced,0,lengthofname);
