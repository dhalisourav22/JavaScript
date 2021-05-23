var student = [
    {
        name : 'Sourav',
        age : 22,
        cgpa : 4.00
    },
    {
        name : 'Juthi',
        age : 21,
        cgpa : 3.00
    },
    {
        name : 'Pritesh',
        age : 23,
        cgpa : 2.59
    },
    {
        name : 'Mehedi',
        age : 23,
        cgpa : 3.52
    }
]

//Problem solving by for loop
function getName(){
    for (let i =0 ; i<student.length; i++){
        if(student[i].cgpa > 3.50)
            console.log(student[i].name);
    }
}
getName();


/**
 * 1. geting those element which cgpa is more then 3.50 (Filter)
 * 2. then geting those new array or returnig array name (Map)
 * That's way they return collection.
*/

//Pbm solving by using treditional function
function getName1(){     //wrok is only returning
    return student.filter(function(x){
        return x.cgpa > 3.50;
    }).map(function(y){
        return y.name;
    });
}
console.log(getName1());

//Pbm solving by using Arrow function
const getName2 = () => student.filter((x) => x.cgpa>3.50).map((y) => y.name);
console.log(getName2());