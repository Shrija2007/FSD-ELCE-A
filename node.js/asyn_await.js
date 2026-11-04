function getUser() {
    return new Promise((resolve, reject) => {
        let user = true;
        if (user) {
            reject(new Error("User is not found"))
        }
        else {
            resolve({
                username: "John Doe",
                role: "ML Engineer"
            })
        }
    })
}


async function fetchUser(){


const response = await getUser()
console.log(response);
}
console.log("hello");
// // //fetch the data
// async function getUserData() {
//     try {
//         const response = await getUser();
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }

// getUserData();