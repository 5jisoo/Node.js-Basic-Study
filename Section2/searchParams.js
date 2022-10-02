const { URL } = require("url");
const myURL = new URL(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
console.log("SearchParams:", myURL.searchParams);
console.log("SearchParams.getAll():", myURL.searchParams.getAll("category"));
console.log("SearchParams.get():", myURL.searchParams.get("limit"));
console.log("SearchParams.has():", myURL.searchParams.has("page"));

console.log("SearchParams.keys():", myURL.searchParams.keys());
console.log("SearchParams.values():", myURL.searchParams.values());

myURL.searchParams.append("filter", "es3");
myURL.searchParams.append("filter", "es5");
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.set("filter", "es6");
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.delete("filter");
console.log(myURL.searchParams.getAll("filter"));

console.log("searchParams.toString():", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
