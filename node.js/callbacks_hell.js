function getUser(id, callback) {
    setTimeout(() => {
        console.log("User Fetched");

        const user = {
            id: 1,
            username: "Nishtha"
        };

        callback(null, user);
    }, 1000);
}

function getProfile(userId, callback) {
    setTimeout(() => {
        console.log("Profile Fetched");

        const profile = {
            id: 1,
            username: "Nishtha",
            location: "New Delhi",
            interest: ["Web Dev", "Agentic AI"]
        };

        callback(null, profile);
    }, 1000);
}

function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Posts Fetched");

        const posts = ["post1", "post2", "post3"];

        callback(null, posts);
    }, 1000);
}

getUser(10101, (error, user) => {
    if (error) {
        console.log(error);
        return;
    }

    getProfile(user.id, (error, profile) => {
        if (error) {
            console.log(error);
            return;
        }

        getPosts(profile.username, (error, posts) => {
            if (error) {
                console.log(error);
                return;
            }

            console.log("Posts:", posts);
        });
    });
});
