What is the primary difference between synchronous and asynchronous programming in JavaScript?

Asynchronous:Are the actions that we initiate now and they finish later.
eg:setTimeout
Synchronous:Are the actions that initiate and finish one by one.

Why is this useful?
Asynchronous programming in JavaScript allows for executing code in non-blocking manner, which means that code that takes longer time to run (e.g. I/O operations, API requests) will not block or stop the execution of the rest of the code. This results in more efficient, faster, and smoother performance in the application.

Asynchronous programming is a form of parallel programming that allows a unit of work to run separately from the primary application thread. When the work is complete, it notifies the main thread (as well as whether the work was completed or failed). There are numerous benefits to using it, such as improved application performance and enhanced responsiveness.

What problems does it solve?
Asynchronous programming in JavaScript solves several problems including:

Blocking Code: Asynchronous code avoids blocking of execution, allowing other code to run while waiting for longer running tasks to complete.
Better performance: Asynchronous programming can lead to better performance by allowing multiple tasks to run concurrently, instead of waiting for each task to complete sequentially.
Handling Slow Code: Asynchronous programming enables handling slow code (e.g. I/O operations, API requests) without freezing the UI or blocking other code execution.
Handling Multiple Tasks: Asynchronous programming helps in handling multiple tasks at the same time, rather than executing them one by one.
Scalability: Asynchronous programming can improve the scalability of applications by allowing multiple tasks to be executed in parallel.



resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.

Promise:

  //The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.
  //Its arguments resolve and reject are callbacks provided by JavaScript itself. 

  //resolve(value) — if the job is finished successfully, with result value.
//reject(error) — if an error has occurred, error is the error object.
//the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.
//The promise object returned by the new Promise constructor has these internal properties:

//state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
//result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.

The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally for that. 