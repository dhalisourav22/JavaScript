var number = parseFloat(prompt("Enter your number : "));
if(number<=100 && number>=0){
    if(number>=80){
        document.write("Get : A+.");
    }
    else if(number<80 && number>=70){
        document.write("Get : A.");
    }
    else{
        document.write("Get : F.");
    }

}
else{
    document.write("You Chose Wrong Number.");
}