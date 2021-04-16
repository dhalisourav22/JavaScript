// var numberOfStudent = Number(prompt("How Many Student You Have : "));
// var idOfStudent = new Array(i);
// for(var i = 0; i<numberOfStudent; i++){
//     idOfStudent[i]=prompt("Enter your "+(i+1)+" student id : ");
// }
// document.write(idOfStudent);
//---------------------------
// var names = new Array();
// names[0] = "Sourav";
// names[1] = "Juthi";
// names[2] = "Rinku";
// names[3] = names[2].concat(" "+names[1]);
// document.write(names[3]);
//---------------------------
// document.write("The length of this array is : "+names.length+"<br>");
// document.write("The set of name is : "+names );

// names.sort();
// document.write("The set of name is : "+names );
// names.push("Pritesh");
// document.write("<br>The set of name is : "+names );
// document.write("<br>Pop Returning : "+names.push());
//----------------------------
// var sum = 0,num = [2,6,5,8,6,2,12];
// for(var i = 0; i<num.length; i++){
//     sum+=num[i];
// }
// document.write("Sum is : "+sum);
//----------------------------
// var names = new Array();
// names[0] = "Sourav";
// names[1] = "Juthi";
// names[2] = "Rinku";
// names[3] = "Pukka";
// names.unshift("Avijit");
// document.write(names.unshift());
// document.write(names.shift());
//---------------------------------------------------------
// names.splice(1, 2,"Mashud","NK","Tanmay");
// document.write(names);
// document.write("<br>The 5 th elements is : "+names[3]);
// //names.splice(1,3);
//-------------------------------------
// document.write("<br>"+names);
// var n1 = names.slice(1,2);
// document.write(n1);
//-------------------------------------
// names.reverse();
// document.write(names);
//-------------------------------------
var number = [1,9,65,2,7,35,4];
number.sort(function(a,b){
    return b-a;
});
document.write(number);