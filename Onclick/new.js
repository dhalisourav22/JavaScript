// function massage1(){
//     alert("This is Button 1..!");
// }
// function massage2(){
//     massage1();
// }
let count = 0;
let changePJSVar = document.querySelector("#changePJS");
function massage1(){
    count++;
    changePJSVar.innerHTML = "You Click Button 1 For "+count+" Time..!";
}
function massage2(){
    changePJSVar.innerHTML = "This is Button 2.";
    count = 0;
}


let changeImgJSVar = document.querySelector("#changeImgJS");
function massa1(){
    changeImgJSVar.src="old.jpg";
    changeImgJSVar.style.top = "0";
}
function massa2(){
    changeImgJSVar.src="new.jpg";
}

//changing class name
let classNameChange = document.querySelector(".my-class");
classNameChange.className = "my-class-1";
console.log(classNameChange);