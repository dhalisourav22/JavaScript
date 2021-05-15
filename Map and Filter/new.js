//Map example : 

var number = [2,1,6,5,2,78,9];
var number1 = number.map(function(x){ //store in number1 array
    return x*x;
})
console.log("After Maping : "+number1);
//direct print
console.log("After Maping : "+number.map(function(x){
    return x*x;
}));



//Filter example : 

var number2 = number.filter(function(x){ //store in number2 array
    return (x*x)<100;   //condition
});
console.log("After Filter The Array Is : "+number2);
