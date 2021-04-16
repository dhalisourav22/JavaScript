var num1 = prompt("Enter the first number : ");
num1 = parseFloat(num1);
var num2 = parseFloat(prompt("Enter your Second number : "));
document.write(num1+" + "+num2+" = "+(num1+num2)+"<br>");
document.write(num1+" - "+num2+" = "+(num1-num2)+"<br>");
var result = num1*num2;
document.write(num1+" * "+num2+" = "+result.toFixed(2)+"<br>");
document.write(num1+" / "+num2+" = "+(num1/num2)+"<br>");