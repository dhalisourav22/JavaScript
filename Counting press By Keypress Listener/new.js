var count = 0;
document.querySelector("textarea").addEventListener("keypress",function(){
    count++;
    var c = document.querySelector("#my-pera");
    // var text = event.key;
    c.innerHTML = "You Pressed : "+count;
})