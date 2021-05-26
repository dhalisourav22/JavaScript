//All string methor is case sensitive. thats means they check on case.
//This three method always return in boolean. Either it's trur or false.

//startsWith()
let sentence = "My name dhali";
console.log(sentence.startsWith("My"));  //string checking
console.log(sentence.startsWith("M"));   //cherecter checking
console.log(sentence.startsWith("n",3)); //Using index. this is the starting point of the sentence string.

//endsWith()
console.log(sentence.endsWith("dhali"));  //string checking
console.log(sentence.endsWith("i"));      //cherecter checking
console.log(sentence.endsWith("i",13));   //Using index. this is the ending point of the sentence string.

//includes()
console.log(sentence.includes("name"));   //string checking
console.log(sentence.includes("m"));      //cherecter checking
console.log(sentence.includes("m",5));    //using index. like 2 step varification process.
