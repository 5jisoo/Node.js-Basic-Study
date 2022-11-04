// 파일을 감시하기

const fs = require("fs");

fs.watch("./target.txt", (eventType, filename) => {
  console.log(eventType, filename);
});
