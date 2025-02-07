let myArray = [27, "student", 11, "day", 60];

let firstElement = myArray[0];
let middleElement = myArray[Math.floor(myArray.length /2)];
let lastElement = myArray[myArray.length -1];

console.log("First Element:", firstElement);
console.log("Middle Element:", middleElement);
console.log("Last Element:", lastElement);

let arrayLength = myArray.length;

console.log("the number of elements in the array are:" ,arrayLength);

myArray.push("new element");

console.log(myArray);

let removedLast = myArray.pop();

console.log(removedLast, myArray);

myArray.unshift("new first");

console.log(myArray);

console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("Using map:");
myArray.map((element) => console.log(element));

const [first, second, ...rest] = myArray;

console.log("First Element:", first);
console.log("Second Element:", second);
console.log("Remaining Elements:", rest);
