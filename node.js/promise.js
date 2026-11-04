const promise1 = new Promise((resolve, reject) => {

    let success = false;

    if (success) {

        const user = {
            id: 1,
            username: "Shrija",
            location: "New Delhi"
        };

        resolve(user);

    } else {

        reject(new Error("User not Fetched"));

    }
});


promise1
    .then((value) => {
        console.log("User fetched successfully:");
        console.log(value);
    })
    .catch((error) => {
        console.log(error.message);
    });