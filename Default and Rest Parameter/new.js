//Default Parameter
function ageShow(age = 18){
    if(age >=18){
        console.log("You are adult..!");
    }
    else{
        console.log("You are too Young for this site..!");
    }
};

ageShow();
ageShow(1);

//Rest Parameter
const sum = (num1,num2,...num3) => {
    console.log(`Num1 = ${num1} Num2 = ${num2} Num3 = ${num3[0]}`)
}
sum(10,20,30,40,50,75,152);

const sum1 = (...num3) => {
    console.log(`Num3 = ${num3}`)
}
sum1(10,20,30,40,50,75,152);


// var c = document.querySelector("#butt");
// c.addEventListener("click",function(){
//     var text = document.querySelector("input").value;
//     if(text == 0){
//         ageShow();
//     }
//     else{
//         ageShow(text);
//     }
// });