for(var i = 0; i < (document.querySelectorAll(".butt").length); i++){
    var select = document.querySelectorAll(".butt")[i];
    select.addEventListener("click",function(){
         var text = this.innerHTML;
         playAudio(text);
    });
}
document.addEventListener("keypress",function (eventn){
    var texts = eventn.key;
    playAudio(texts);
        
});
function playAudio(text){
    if(text == "a"){
        var audio1 = new Audio("sounds/1.mp3");
        audio1.play();
    }
    if(text == "b"){
        var audio2 = new Audio("sounds/2.mp3");
        audio2.play();
    }
    // if(text == "c"){
    //     var audio3 = new Audio("sounds/3.mp3");
    //     audio3.play();
    // }
}