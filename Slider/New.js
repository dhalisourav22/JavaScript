let imgArr = ["img/8.jpg","img/9.jpg","img/11.jpg","img/20.jpg","img/21.jpg","img/22.jpg"];
let count = 0;
let slideImg = document.querySelector("#imgTag")
function next(){
    count++;
    if(count<imgArr.length){
        slideImg.src = imgArr[count];
    }
    else{
        count=0;
        slideImg.src = imgArr[count];
    }
}
function prev(){
    count--;
    if(count>=0){
        slideImg.src = imgArr[count];
    }
    else{
        count=imgArr.length-1;
        slideImg.src = imgArr[count];
    }
}