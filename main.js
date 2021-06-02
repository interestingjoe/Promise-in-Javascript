let hello = new Promise((resolve, reject) => {
    if (true) {
        resolve('success')
    } else {
        reject('failed')
    }
});

let setOutput = (message) => {
    console.log('The status is: ', message);
}