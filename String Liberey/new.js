var name = "Sourav";
document.write("The length of the name is : "+name.length);
var firstName = prompt("Enter Your first Name : ");
var lastName = prompt("Enter Your Last Name : ");

var fullName = firstName.concat(" "+lastName);
console.log("Name is : "+fullName);
var charAtNumber = prompt("Enter which number of char you want to see");
var i = (charAtNumber-1);
document.write("<br>Your charecter is : "+fullName.charAt(i));
document.write(fullName.toUpperCase());
document.write(fullName.toLowerCase());

var slice = fullName.slice(1,4);
document.write("<br>"+slice);