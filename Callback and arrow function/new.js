//treditional annonymous callback function
setTimeout(function (){
    console.log("this is treditional annonymous callback function");
},3000);


//arrow annonymous callback function
setTimeout(()=>{
    console.log("this is arrow annonymous callback function");
},4000);


//treditional callback function not annonymous
setTimeout(display,5000);
function display(){
    console.log("this is treditional callback function");
}


//arrow callback function not annonymous (Here function implementation first then call it as a callback function)
const display1 = () => {
    console.log("this is arrow callback function");
}
setTimeout(display1,6000);
