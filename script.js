const Rx = require('rxjs');

const myPromise = new Promise(resolve => {
    setTimeout(() => {
       resolve('dog');
    }, 1000);
});

myPromise.then(result => {
    console.log('promise: ', result);
});

const myObservable = new Rx.Observable(observer => {
    setTimeout(() => {
        observer.next('dog');
        observer.next('cat');
        observer.next('bird'); 
    }, 5000);
});

myObservable
.subscribe(result => {
    console.log('observable: ', result);
});