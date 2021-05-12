//Error handeling By Try Catch And Finaly Block

try{
    alert("Are You Sure : ");
    alert("Your Age Is : " +age);
    
}
catch(err){
    console.log("You must mistake something..! ");
    console.log("You have an error called :" +err.name);
    console.log("You miss : "+err.message);
    console.log("Full Error is : "+err);
}
finally{
    document.write("This is an adult site..!")
}