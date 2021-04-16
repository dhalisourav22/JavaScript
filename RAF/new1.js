document.write("Hi mam<br>");
var name1, name2;
name1 = "Sourav";
name2 = "Dhali"
var age = 22;
console.log(typeof(age));
document.write(name1+" "+name2);
console.log(typeof(true));
document.write(typeof(20));
/* this is my personal bio. I am a student of NUBTK. I want to be a SPACEX engineer*/
var numString = toString(age);
console.log(typeof(numString));
var numberString = "20";
console.log(typeof(numberString)); 
numberString = parseInt(numberString);
console.log(typeof(numberString));

var num2 = "21.285";
console.log("The type is : "+typeof(num2));
num2 = parseFloat(num2);
console.log("After changing,")
console.log("The type is : "+typeof(num2));
console.log("The number is : "+num2);
var fixed = num2.toFixed(1);
console.log(fixed);

console.log("-----------------------------");

var s1 = "20";
console.log(typeof(parseInt("23")));
var s2 = 21.368465;
var num3 = s2.toPrecision(3);
num3 = toString(num3);
console.log(typeof(num3));
var b1 = true;
console.log(typeof(b1));

console.log("-----------------------------");

var numb = "24";
console.log(Number(numb));
console.log(Number(true));
var int = parseInt(true);
console.log(int);

console.log("-----------------------------");
document.write("<br>-------------------------------<br>");

var number1 = 20, number2 = 30;
console.log("Sum is : "+(number1+number2));

var firstName = "Sourav ", lastName = "Dhali";
var fullName = firstName + lastName;
console.log("My name is "+fullName+" skd");
//alert("My name is "+fullName+" skd");
