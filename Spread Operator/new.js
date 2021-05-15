//unpack an array by spread operator
const addNumber = (x,y,z) =>{
    return x+y+z;
}
let numbers = [1,2,5];
console.log(addNumber(...numbers));

//concat two array
let numbers1 = [2,5,8,9,5];
let numbers2 = [...numbers,...numbers1];
console.log(numbers2);

//adding an array
console.log([2,...numbers,12]);

//concat of two object
let p1 = {
    name: "sourav"
}
let p2 = {
    age : 22
}
let p = {...p1,...p2};
console.log(p);
