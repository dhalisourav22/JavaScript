var char = prompt("Enter any charecter : ");
char = char.toLocaleLowerCase();
if(char>="a" && char<="z"){
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        document.write("Vowel.");
    }
    else{
        document.write("Consonent.");
    }
}
else{
    document.write("You give wrong Charecter.")
}