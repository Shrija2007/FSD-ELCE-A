const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        const user = {
            id: 1,
            name: "Shrija",
            age: 19
        };
        resolve(user);
    }
    else {

        reject(new Error("Operation is failed"));
    }
});
console.log(promise1);


//const promise2 = new Promise((resolve, reject) => {
    //let success = false;
    //if (success) {
        //const user = {
            //id: 1,
            //name: "Shrija",
          //  age: 19
        //};
      //  resolve(user);
    //}
    //else {
    //    reject(new Error("Operation is failed"));
  //  }
//});
//console.log(promise2);
//onst PromisesAll = [promise1, promise2];


//Promise.all(PromisesAll).then((result) => {
  //  console.log(result);
//})
    //.catch((error) => {
      //  console.log(error.message);
    //})
    //finally(() => {
   //     console.log("finally block");
    //})
Promise.any([promise1, promise2])
    .then((response) => {
        return response
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error) => {
        console.log(error.name);
    });
    