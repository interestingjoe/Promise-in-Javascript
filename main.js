let hello = new Promise((resolve, reject) => {
    if (true) {
        resolve('Success')
    } else {
        reject('Failed')
    }
});

let setOutput = (message) => console.log('The status is: ', message)

hello.then((message) => {
    setOutput(message);
}).catch((message) => {
    setOutput(message);
});