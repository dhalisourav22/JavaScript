//single line export
let name = "Sourav Dhali";  //Export a variable
//multiline export
let city = "Dhaka";
export {city,name};


//export a fun
export function setName(n){        //Export a function which change the variable called name
    name = n;
}

export function info(uni,id){      //Export a Parameterized function
    console.log("University : "+uni);
    console.log("University ID : "+id);
}


//Changing the name wher it need to import
let age = 22;
export {age as dateOfBirth};