//Author @SouravDhali;

class Student{
    
    constructor(){
        this.id;
        this.id = 225;
        this.names ="Sourav";
        document.write("Name : "+this.names+"   ID : "+this.id);
    }
    
    display(){
        
    }
}
var s1 = new Student();

class Student1{
    
    constructor(){
        this.id = 225;
        this.names ="Sourav";
        
    }
    
    display(){
        document.write("Name : "+this.names+"   ID : "+this.id);
    }
}
var s1 = new Student1();
s1.display();


class Student2{    
    constructor(){
               
    }
    id = 225;
    names ="Sourav"; 
    display(){
        document.write("Name : "+this.names+"   ID : "+this.id);
    }
}
var s1 = new Student1();
s1.display();