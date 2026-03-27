function greetings(user, callbackOrAnyName) {
    console.log("Hello "+user);
    greet();
}

// Any function
function greet() {
    console.log("Nice to meet you!!");
}

// Passing callback function
greetings("Mohit", greet);

// ---- Using anonymous function ----
function wait(callback) {
    setTimeout(() => {
        callback("callback function executed!");
    }, 1000);
}

wait((message) => {
    console.log(message);
});

console.log("--------------");
// Using Promise
// fetch immediately sends an http request and returns a promise without waiting for the request to complete.
// const myPromise = fetch("https://jsonplaceholder.typicode.com/posts/1");

// Simulating a promise instead of making server calls using fetch()
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            json: () => Promise.resolve({
                title: "Mocked Data!"
            })
        });
    }, 1000);
});

// the immediate status of promise will be pending
console.log("Current status: ", myPromise);

// Promise chaining using .then() to decide on data transformation.
myPromise.then((response) => {
    return response.json(); // wait for data to parse and returns a new promise for the next then() to process.
})
.then((data) => {
    console.log("Data received: ", data.title);
}).catch((error) => {
    console.error("Connection failed: ", error);
}).finally(() => {
    console.log("Operation finished!");
});

console.log("-------------");
// Async and Await
async function getPost() {
    try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const fetchMock = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    json: () => Promise.resolve( {
                        title: "async/ await: mock json"
                    })
                });
            }, 2000);
        });
        const response = await fetchMock;
        const responsePromise = await response.json();
        console.log("Using async / await: ",responsePromise.title);
    } catch(error) {
        console.log(error);
    }
}
getPost();