//The constructor syntax for a promise object is:

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });
  
  //Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via setTimeout):

  let promise = new Promise(function(resolve, reject) {
   // the function is executed automatically when the promise is constructed
 
   // after 1 second signal that the job is done with the result "done"
   setTimeout(() => resolve("done"), 1000);
 });

 //And now an example of the executor rejecting the promise with an error:

let promise = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
//the executor should perform a job (usually something that takes time) and then call resolve or reject to change the state of the corresponding promise object.
//All further calls of resolve and reject are ignored:

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

//Immediately calling resolve/reject
let promise = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });

  //The syntax is:

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
//The first argument of .then is a function that runs when the promise is resolved and receives the result.

//The second argument of .then is a function that runs when the promise is rejected and receives the error.

