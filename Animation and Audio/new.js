let len = document.querySelectorAll("button").length;
for(let i = 0; i <len ; i++){
    let changeAble = document.querySelectorAll(".but")[i];
    changeAble.addEventListener("click",function(){
        var text = this.innerHTML;

        if(text == "a"){
            var audio = new Audio("1.mp3");
            audio.play();
        }
        if(text == "b"){
            var audio = new Audio("2.mp3");
            audio.play();
        }
        if(text == "c"){
            var audio = new Audio("3.mp3");
            audio.play();
        }
        setAnimations(text);
    });
}
function setAnimations(text){
    var seclect = document.querySelector("."+text);
    seclect.classList.add("butStyle");
    setTimeout(function(){
        seclect.classList.remove("butStyle");
    },1000);
}
