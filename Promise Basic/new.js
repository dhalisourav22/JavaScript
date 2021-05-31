//creating a promise (Promise is asynchronous)
let promise1 = new Promise ((resolve, reject) =>{   //The peomise is resolve
    let workCompleted = true;
    if(workCompleted){
        resolve("Peomise 1 is completed..!");
    }
    else{
        reject("Promise 1 is not completed..!");
    }
});

const promise2 = new Promise((myResolve, myReject)=>{  //The promise is resolve
    myResolve("Promise 2 is completed..!");
    // myReject("Promise 2 is not completed..!");
});


//Full promise showing
console.log(promise1);
console.log(promise2);


//Showing promise by then and catch
promise1.then((res)=>{    //Using then function
    console.log(res);
}).catch((rej)=>{         //Using catch function(Thats not gone a work. because this promise is fulfilled when we created that)
    console.log(rej);
});

promise2.then((res1)=>{    //Using only then because this promise has no rejection.
    console.log(res1);
});


//Using all method

Promise.all([promise1,promise2]).then((res)=>{
    console.log(res);
});

Promise.all([promise1,promise2]).then(([res1,res2])=>{   //using distructor
    console.log(res1,res2);
});



//Using race function(This is count only which promise is come first or win the race. this function throw a single output from multiple function)
let p1 = new Promise((res, rej)=>{
    setTimeout(()=>{
        let workCompleted = true;
        if(workCompleted){
            res("Peomise 3 is completed..!");
        }
        else{
            rej("Promise 3 is not completed..!");
        }
    },5000);
});

var p2 = new Promise((res1)=>{      //here we don't use reject function parameeter because this promise when we made, we told that, this is a promise which we fulfilled.
    setTimeout(()=>{
        res1("Peomise 4 is completed..!");
    },4000);
});

Promise.race([p1,p2]).then((res)=>{    //race method
    console.log(res);
});

