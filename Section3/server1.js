const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080);

server.on("listening", () => {
  // 서버 연결
  console.log("8080번 포트에서 서버 대기 중입니다!");
});

server.on("error", (error) => {
  // 에러
  console.error();
  error;
});

// 이렇게 2개를 동시에 돌릴 수도 있음
const server1 = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080);
