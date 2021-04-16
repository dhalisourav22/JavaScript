class Student{
    setInformation(name,id){
        this.name = name;
        this.id = id;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
}
var s1 = new Student();
s1.setInformation("Sourav", 337);
console.log(s1.getName());