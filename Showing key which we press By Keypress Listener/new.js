document.addEventListener("keypress",function(event){
    var c = document.querySelector("#my-pera");
    var text = event.key;
    c.innerHTML = "You Pressed : "+text;
})