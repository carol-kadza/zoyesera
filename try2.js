// x=5;
// y=10;
// z=15;
// result=((x+y)*z)
// console.log(result);

// var hello="hello";
// let fullname="caroline";
// result=hello + fullname
// console.log(result);

// var r=8;
// pie=22/7;
// area=pie*r^2
// result=area
// console.log(area);


// let num1=5;
// let num2=10;

// num1=num1+num2;
// num2=num1-num2;
// num1=num1-num2;

// console.log("after swapping :");
// console.log("num1=",num1);
// console.log("num2=",num2);

// Step 1: Create and assign values to num1 and num2
let num1 = 10;
let num2 = 20;

console.log("Before swapping:");
console.log("num1 =", num1); // 10
console.log("num2 =", num2); // 20

// Step 2: Swap the values without using a temporary variable
[num1, num2] = [num2, num1];

console.log("After swapping:");
console.log("num1 =", num1); // 20
console.log("num2 =", num2); // 10
