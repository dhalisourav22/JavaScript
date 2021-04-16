

//Object Making : 

// var student1 = {
//     name : "Sourav",
//     id : 337,
//     cgpa : 3.79,
//     display : function(){
//         document.write("This is "+this.name+" Info.");
//     }
// };
// // student1.display();
// console.log(student1);


//Constructr : 

// function Student(name,id){
//     document.write("This is a constructor..!<br>");
//     this.name = name;
//     this.id = id;
//     this.display = function(){
//         document.write("Name : "+this.name+"<br>ID : "+this.id);
//     }
// }
// var s1 = new Student("Sourav", 337);
// s1.display();


//ES6 :
class Person{
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    display(){
        document.write("Name : "+this.name+"<br>Age : "+this.age);
    }
}
class Student extends Person{
    constructor(name,age,id){
        super(name,age);
        this.id = id;
    }
    display(){
        super.display();
        document.write("<br>ID  : "+this.id); 
    }    
}
var p1 = new Student("Sourav",22, 337);
p1.display();
document.write("<br>"+p1.id);

