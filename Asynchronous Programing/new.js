const taskOne = (callback) => {
    console.log("This is task 1");
    callback();
}
const taskTwo = (callback) =>{
    setTimeout(()=>{
        console.log("This is task 2");
        //callback();   //that's how we run like a synchrons way with 2s delay.
    },2000);
    callback();
}
const taskThree = (callback) => {
    console.log("This is task 3");
    callback();
}
const taskFour = () => {
    console.log("This is task 4");
}
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour();
        });
    });
});