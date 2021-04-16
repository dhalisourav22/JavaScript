////Problem : 

// function Employe(name,id,salery){
//     this.name = name;
//     this.id = id;
//     this.salery = salery;
//     let bonus = 2000;
//     let totalSalery = function(){        
//         let totalsall = (bonus+salery);
//         document.write("Total sallery is : "+totalsall);
//     }  
//     this.display = function(){
//         document.write("Name is : "+name+"<br>ID : "+this.id+"<br>Sallery : "+(this.salery));
//         totalSalery();
//     }
// }
// var e1 = new Employe("Sourav",337,50000);
// e1.bonus = 5000;
// e1.display();




////Problem Solving 1(no ES6):

// function Student(name, sallery){
//     this.name = name;
//     this.sallery = sallery;
//     let bonus = 200;
//     this.display = function(){
//         document.write("Name : "+this.name+"<br>Total Sallery : "+(this.sallery+bonus));
//     }
// }
// var s1 = new Student("Sourav Dhali", 5700);
// s1.bonus = 500;
// s1.display();


////Problem Solving 2(no ES6):

// function Student(name, sallery){
//     this.name = name;
//     this.sallery = sallery;

//     let totalSalery = function(){
//         let bonus = 200;
//         let totalSalerys = (bonus + sallery);
//         return totalSalerys;
//     }
//     this.display = function(){
//         document.write("Name : "+this.name+"<br>Total Sallery : "+totalSalery());
//     }
// }
// var s1 = new Student("Sourav Dhali", 5700);
// s1.bonus = 500;
// s1.display();



////Problem Solving 3(By ES6):

class Student1{
    constructor(name, sallery){
        this.name = name;
        this.sallery = sallery;
        let bonus = 200;     
        this.display=function(){
            document.write("Name : "+this.name+"<br>Total Sallery : "+(this.sallery+bonus));
        }   
    }
        
}
var s2 = new Student1("Sourav Dhali", 5700);
s2.bonus = 500;
s2.display();