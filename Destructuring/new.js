/**
 * @author : Sourav Dhali;
 * @topic : Destructuring;
 * 
 * when we are creating a variable reference then we use [] and thats follow the sequence
 * when we are creating the object variable we use {} and its follow the name not sequence
 */

//Array distructure

let number =[10,30,20,70,80,50];
// let [x,y,z,b,c,d] = [number[0],number[1],number[2],number[3],number[4],number[5]];
// let [x,y,z,b,c,d] = number;
let [x,y,...z] = number;  //using spread operator
console.log('X = '+x);
console.log('y = '+y);
console.log('z = '+z);    //this is an array
let [a,b,c,d] = z;        //thar can we use
console.log('d = '+d);



//Swaping

let num1 = 10, num2 = 20;
[num2,num1] = [num1,num2];  //this is flow the sequence
console.log('Number 1 : '+num1);
console.log('Number 2 : '+num2);



//object destructuring

let student = {
    names : 'Sourav Dhali',
    id : 337,
    age : 22
}
let {names, id, age} = student;
console.log(`Name is : ${names}, Age is : ${age}, ID is : ${id}`);
//Rename the object variable name into - m,n,o
let [m,n,o] = [names, id, age];  //changing the name of previous variable
console.log(`Name is : ${m}, Age is : ${o}, ID is : ${n}`);



//Nested - object destructuring

let student1 = {
    name1 : 'Sourav Dhali',
    id1 : 337,
    age1 : 22,
    lang : {
        primary : 'Bangla',
        secondary : 'English'
    }
}
let {name1, lang} = student1;
console.log(`Name is : ${name1}, Primary Language is : ${lang.primary}`);
//Rename the nested-object variable name into - p,s
let [p,s] = [lang.primary,lang.secondary];  //that's how we can do samall the path
console.log(`Name is : ${name1}, Secondary Language is : ${s}`);



//destructuring object parameter

let student2 = {
    name2 : 'Sourav Dhali',
    id2 : 337,
    age2 : 22,
    lang2 : {
        primary2 : 'Bangla',
        secondary2 : 'English'
    }
}
const studentInfo = ({name2,lang2}) => {   //Taking the valur
    console.log(`This is under the function...!`);
    console.log(`Name is : ${name2}, Primary Language is : ${lang2.primary2}`);
}
studentInfo(student2);  //Passing the object
