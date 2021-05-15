function show(name,age){

    let data = {
        name,age
    }
    return data;
}
console.log(show("sourav",22));
let message = {
    display(){
        console.log("This is display function..!");
    }
}
message.display();

let message1 = {
    "display fun"(){
        console.log("This is display function..!");
    }
}
message1["display fun"]();