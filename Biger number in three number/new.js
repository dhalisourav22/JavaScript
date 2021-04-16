/*
//By if else
var num1 = parseFloat(prompt("Enter The First Number : "));
var num2 = parseFloat(prompt("Enter The Second Number : "));
var num3 = parseFloat(prompt("Enter The Third Number : "));
var maximumNumber = num1;

    if( num1 >= num2 && num1 >= num3)
          document.write(num1+" is the largest Number");

    else if (num2 >= num1 && num2 >= num3)
          document.write(num2+" is the largest Number");

    else
          document.write(num3+" is the largest Number");
*/


//By Loop
var n, number, max;
n = parseFloat(prompt("How many number you want to check : ") );
number = parseFloat(prompt("Enter 1 number : "));
max = number;
for(var i = 1; i<n; i++){
    number = parseFloat(prompt("Enter "+(1+i)+" number : "));
    if(max<number){
        max = number;
    }
}
document.write("Largest Number is : "+max);
