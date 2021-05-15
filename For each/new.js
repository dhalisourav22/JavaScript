let number = [2,1,3,58,4,2,4];

number.forEach(function(x){   //using anonymous function
    console.log(x);
});

number.forEach(myFun);    //using function with name
function myFun(y){
    console.log(y);
}

number.forEach(function(x,ind,arr){    //squre every element
    arr[ind] = x*x;
})
console.log(`Afte squer the hole array : ${number}.`);

number1 = new Array();
number.forEach(function(x){            //copy an array into a new array
    number1.push(x);
})
console.log(`New array is : ${number1}.`);