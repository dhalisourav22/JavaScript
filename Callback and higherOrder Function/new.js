/**
 * this program is showing callback fuction and higher order function
 * we can customized the name of callback function as our wish
 */

function square (x){
    console.log(`The square of ${x} : ${x*x}`);
}

function higherOrderFunction (num, callback){ //the pasing function as a parameter is called callback function
    callback(num);     //tht's how this is call a previous function. thst's why this is called a callback function
}

higherOrderFunction(12, square);  //the function which take an parameter as a function , this function is called a higher order function
