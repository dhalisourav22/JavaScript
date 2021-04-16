var h2Style = document.querySelector("#my-id");
function addStyle(){
    h2Style.style.color= "blue";
    h2Style.style.fontSize= "2em";
    h2Style.style.fontStyle= "italic";
}
function removeStyle(){
    h2Style.removeAttribute("style");
}