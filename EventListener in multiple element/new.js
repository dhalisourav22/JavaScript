let length = document.querySelectorAll("button").length;
for( let i = 0; i<length; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        document.querySelector("h1").innerHTML = this.innerHTML+" is Clicked...!"
    });
}