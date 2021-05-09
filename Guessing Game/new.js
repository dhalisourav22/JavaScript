//Guessing Game;
//Author @Sourav Dhali;
//Email : dhalisourav22@gmail.com;



let wine = 0, lost =0;
for(let i =0; i<5; i++){
    let number = Number(prompt('Enter Your Guessing Number Under(1 to 5) : '));
    let guessNumber = Math.floor(Math.random()*5)+1;
    if(number==guessNumber){
        console.log('You WON..!     You Guess Right One..!');
        wine++;
    }
    else{
        console.log('You LOST..!    You Guess Wrong One..!     The Guess is :'+guessNumber);
        lost++;
    }
}
document.write("You WON "+wine+" Time's.<br>");
document.write("You LOST "+lost+" Time's.");
