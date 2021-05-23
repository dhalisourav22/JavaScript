//function declaration(not single line)
function massage1(){
    console.log("This is no 1.");
}
const massage2 = () => {
    console.log("This is no 2");
}
massage1();
massage2();


//function in single line
function massage3(){console.log("This is no 1.");}
massage3();

const massage4 = () => console.log("This is no 2");
massage4();
const massage5 = x => console.log("This is no 2 :" +x); 
massage5(10);


//return value
const massage6 = x =>   "This is no 2 :" +x; 
console.log(massage6(10));
