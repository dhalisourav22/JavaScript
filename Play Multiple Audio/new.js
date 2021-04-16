// for(let i = 0; i<3; i++){
//     let changeable = document.querySelectorAll(".myButton")[i];
//     changeable.addEventListener("click", function(){
//         let readButtonValue = this.innerHTML;
//         switch(readButtonValue){
//             case "First" : 
//                 var audio = new Audio("sounds/1.mp3");
//                 audio.play();
//                 break;
//             case "Second":            
//                 var audio = new Audio("sounds/2.mp3");
//                 audio.play();
//                 break;        
//             case "Third" :            
//                 var audio = new Audio("sounds/3.mp3");
//                 audio.play();
//                 break; 
//         }        
//     });
// }

for(let i = 0; i<3; i++){
    let changeable = document.querySelectorAll(".myButton")[i];
    changeable.addEventListener("click", function(){
        let readButtonValue = this.innerHTML;
        playingAudio(readButtonValue);   
        changeable.style.boxShadow =  "0 10px 25px 0 tomato";
        setTimeout(function(){
            changeable.style.boxShadow =  "0 10px 25px 0 blue";
        },1000);
    });
}
function playingAudio(readButtonValue){
    switch(readButtonValue){
        case "First" : 
            var audio = new Audio("sounds/1.mp3");
            audio.play();
            break;
        case "Second":            
            var audio = new Audio("sounds/2.mp3");
            audio.play();
            break;        
        case "Third" :            
            var audio = new Audio("sounds/3.mp3");
            audio.play();
            break; 
    }
}