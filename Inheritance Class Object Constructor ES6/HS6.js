//class and constructor is keyword;
//Author @Sourav Dhali;
//Email : dhalisourav22@gmail.com;

class Man{
    constructor(age,name){
        this.name = name;
        this.age = age;
    }    
}
class Student extends Man{
    constructor(age,name,id){
        super(age,name);
        this.id = id;
    }
    display(){
        document.write("Name : "+this.name+"<br>Age : "+this.age+"<br>ID : "+this.id+"<br>");
    }
}
var numberOfStudent = Number(prompt("Enter The Number Of Student : "));
var arr = new Array(numberOfStudent);
for(var i = 0; i <arr.length; i++){
    var names = prompt("Enter Your "+(i+1)+" Name : ");
    var ages = Number(prompt("Enter Your "+(i+1)+" Age : "));
    var ids = Number(prompt("Enter Your "+(i+1)+" ID : "));
    arr[i]= new Student(ages,names,ids);
}
for(var j = 0; j<arr.length ; j++){
    arr[j].display();
}