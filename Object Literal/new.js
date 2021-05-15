function show(name,age){

    let data = {
        name,age
    }
    return data;
}
console.log(show("sourav",22));

//consize method/syntex
let message = {
    display(){         //consize method/syntex
        console.log("This is display function..!");
    }
}
message.display();

//making function with space
let message1 = {
    "display fun"(){
        console.log("This is display function..!");
    }
}
message1["display fun"]();
