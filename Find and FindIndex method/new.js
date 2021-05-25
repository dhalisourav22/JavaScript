//Using find and findIndex method in general array

let numbers = [5,8,3,7,10,9,1];
let firstValue = numbers.find(x => x%2 === 0);  //find mothod
console.log(firstValue);

const oddNumber = (v)=>{     //Here v means each element vallue of array in iteretic way
    if (v%2 !=0){
        return v;
    }
}
let firstIndex = numbers.findIndex(oddNumber);  //findIndex method
console.log(firstIndex);


//Using find and findIndex method in array of object

let student = [
    {
        Name : 'Sourav',
        CGPA : 3.85
    },
    {
        Name : 'Chiranjit',
        CGPA : 3.00
    },
    {
        Name : 'Pritesh',
        CGPA : 4.00
    },
    {
        Name : 'Mehedi',
        CGPA : 3.25
    }
]
console.log(student.find(x => x.CGPA>3.50));  //Return the object(Direct print)
