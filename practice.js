//here’s a reaction to a successfully resolved promise
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 500);
//   });
// //console.log(promise);
  
//   // resolve runs the first function in .then
//   promise.then(
//     result => alert(result), // shows "done!" after 1 second
//     error => alert(error) // doesn't run
//   );
// console.log(promise);


//   //And in the case of a rejection, the second one:

 let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.catch(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
  );
  console.log(promise);

// // reject runs the second function in .then
// promise.then(
//   result => alert(result), // doesn't run
//   error => alert(error) // shows "Error: Whoops!" after 1 second
// );