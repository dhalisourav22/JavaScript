const taskOne = () => {
    return new Promise ((resolve , reject)=>{
        resolve("This task 1 is completed..!");
    });
};
const taskTwo = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("This task 2 is completed..!");
        },3000);
    });
};
const taskThree = () => {
    return new Promise((resolve, reject)=>{
        resolve("This task 3 is completed..!");
    });
};
const taskFour = () => {
    return new Promise ((resolve, reject) =>{
        reject("This task 4 is not completed..!");
    });
};

taskOne().then((res)=>{
    console.log(res);
}).then(taskTwo).then((res)=>{
    console.log(res);
}).then(taskThree).then((res)=>{
    console.log(res);
}).then(taskFour).then((res)=>{
    console.log(res);
}).catch((err)=>{               //One catch is enough for all error(error occurs when the promise is rejected)
    console.log(err);
});