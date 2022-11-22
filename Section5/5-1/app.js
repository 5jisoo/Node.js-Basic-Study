const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// 설정
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cookieParser("zerochopw"));
app.use("/", express.static(__dirname, "public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session());
app.use(multer().array());

// 모든 코드에서 실행
app.use(
  (req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요.");
    next();
  },
  (req, res, next) => {
    try {
      // throw new Error("에러 발생 가정");
    } catch (error) {
      next(error); // next에 인수가 들어가면 에러처리 미들웨어로 바로 넘어간다
    }
  }
);

app.use("/", (req, res, next) => {
  if (req.session.id) {
    express.static(__dirname, "public")(req, res, next);
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));

  // req.cookies; // {mycookie : "test"}

  // res.cookie("name", encodeURIComponent(name), {
  //   expires: new Date(),
  //   httpOnly: true,
  //   path: "/",
  // });

  // // 쿠키 지우고 싶을 때
  // res.clearCookie("name", encodeURIComponent(name), {
  //   httpOnly: true,
  //   path: "/",
  // });

  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify({ hello: "zerocho" }));

  // res.json({ hello: "zerocho" });
  // console.log("hello zerocho");
});

// 같은 라우터가 2개라면?
app.get("/", (req, res) => {
  console.log("실험 확인하기");
});

app.get("/category/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.get("/about", (req, res) => {
  res.send("Hello, Express");
  // res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});

app.get("*", (req, res) => {
  res.send("hello everybody");
});

app.use((req, res, next) => {
  // 이런식으로 커스텀도 가능
  res.status(200).send("404 에러 발생");
});

app.use((err, req, res, next) => {
  // 에러 미들웨어는 이 4개를 반드시 전부 써주어야 함
  console.error(err);
  res.send("에러 발생!");
});
