//alert("Sure To Enter This Site.!");
document.write("This is sourav's site.");
document.write("<br> I am Read NUBTK.");
console.log("Hi Are You There..?");
console.log(typeof("Sourav"));
var nameOfMine = "Sourav";
document.write("My name is : "+nameOfMine);
console.log("My name is : "+nameOfMine);
var id = 2;
//id = toString(id);
console.log(typeof(id));
var stringId = toString(id);
console.log(typeof(stringId));
document.write("Id is : "+id);
var phoneNumber = "01728905588";
phoneNumber = parseInt(phoneNumber);
phoneFloat = parseFloat(phoneNumber);
document.write(typeof(phoneNumber)+" <br>");
document.write(typeof(phoneFloat));
console.log(typeof(parseInt("1212")));
var num = 2.6529319;
num = num.toFixed(3);
document.write("<br>The Fixed Number Is : "+num);
//now num become Stringf thets why we need to convert that into a number then we shoud use toPrecision.
num = parseFloat(num);
num= num.toPrecision(1);
console.log("The Fixed Number Is : "+num);
//That's time the num become also a String type
var acc = true;
acc = Number(acc);
document.write("After using the number method's : "+acc);
var firstName = "Sourav";
var lastName = "Dhali";
var fullName = firstName+" "+lastName;
document.write("The Name is  : "+fullName);
var firstNameLength = firstName.length;
document.write("<br>Length is : "+firstNameLength);
document.writeln("<br> The length of dhali is : "+lastName.length);
//var num1 = parseInt(prompt("Enter Your age : "));
// var num1 = prompt("Enter Your age : ");
// num1 = parseInt(num1,10);
// document.writeln("Input type is : "+typeof(num1));
var text = "NUBTK";
document.write(text.charAt(2));
document.write(fullName.toUpperCase());
document.writeln("<br>");
document.write(fullName.toLowerCase());
var names = firstName.concat(" "+lastName);
document.write("Name is : "+names);
var sliceOfName = names.slice(0,6);
document.write("The slices is : "+sliceOfName);
//--------------------------------------------
var aa= 10;
var bb= "10";
console.log(aa===bb);
console.log(!(25<2));
//------------------------------------------------
// var number1 = parseInt(prompt("How Many Number You Have..? "));
// var n = parseInt(prompt("Enter The Number : "));
// var max = n;
// for(var i = 1; i < number1; i++){
//     n = parseInt(prompt("Enter The Number : "));
//     if(max<n){
//         max=n;
//     }
// }
// document.write("Maximum Number is : "+max);
//-------------------------------------------------
// var char = prompt("Enter Any Latter : ");
// char = char.toLowerCase();
// switch(char){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":{
//         document.write("This Is Vowel..!");
//         break;
//     }
//     default :{
//         document.write("This Is Consonent..1");
//     }
// }
