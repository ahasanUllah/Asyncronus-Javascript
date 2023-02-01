const promise1 = Promise.resolve('Promise 1 resolve')

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
       return resolve('Promise 2 resolved')
    }, 3000);
})

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))

// Promise.all([promise1, promise2]).then(res => console.log(res))
Promise.race([promise1, promise2]).then(res => console.log(res))