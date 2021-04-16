let myVar = document.querySelector("#my-button");
// myVar.addEventListener("click",work);
// function work(){
//     alert("Hi....!")
// }
myVar.addEventListener("click", function() {
    alert("Hi....!");
});


let myVar2 = document.querySelector("p")
myVar2.addEventListener("mouseover",work1);
function work1(){
    myVar2.classList.add("my-style");
}
myVar2.addEventListener("mouseout",function(){
    myVar2.classList.remove("my-style");
})