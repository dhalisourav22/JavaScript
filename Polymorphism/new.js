class Bird{
    constructor(name){
        this.name = name;
    }
    info(){
        document.write(this.name+" They Fly..!");
    }
}
class Fish extends Bird{
    //constructor of supper class autometic call.
    info(){
        document.write(this.name+" They Swime..!")
    }
}
var f1 = new Fish("Katla");
f1.info();
document.write("<br>");
var b1 = new Bird("Tiya");
b1.info();