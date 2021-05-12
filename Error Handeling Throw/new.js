/**
 * Error Handeling
 * using throw, try and catch
 * Author @Sourav_Dhali
 */




document.querySelector("button").addEventListener("click",function(){
    var value = document.querySelector("input").value;
    try{
        if(value<=18){
            throw "Not Adult...! : Your age is only "+value;  //customize error
        }
        else{
            console.clear();
        }
    }catch(err){
        console.log(err);
    }
});