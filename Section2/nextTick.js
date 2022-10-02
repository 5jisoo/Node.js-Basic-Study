setImmediate(() => {
  console.log("immidiate");
});

process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("timeout");
});

Promise.resolve().then(() => console.log("promise"));
