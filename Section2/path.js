const path = require("path");

path.join(__dirname, "/var.js");
// path: ~ NODEJS-BASIC-STUDY\Section2\var.js

path.join(__dirname, "..", "/var.js");
// path: ~ NODEJS-BASIC-STUDY\var.js

path.resolve(__dirname, "..", "/var.js");
// 절대경로 path: C:\var.js
