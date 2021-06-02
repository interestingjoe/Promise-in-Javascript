let hello = new Promise((resolve, reject) => {
    if (true) {
        resolve('success')
    } else {
        reject('failed')
    }
});
