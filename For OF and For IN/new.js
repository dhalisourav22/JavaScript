//for..of
let arr =  [1,2,6,8,4,1];
for(let x of arr){ //for array , string etc should use for..of
    console.log(x);
}

//for...in
let display = {
    name : 'Sourav',
    age : 23,
    dept : 'CSE',
    homeTowen : 'Bagerhat'
}
for(let x in display){ //for object always should use for..in
    console.log(x); // key
    console.log(display[x]); // value
}