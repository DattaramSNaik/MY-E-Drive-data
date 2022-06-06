const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Akshay...!");
    res.end(); // is used to quickly end the response without sending any data.
  } else if (req.url === "/num") {
    res.write("Hello Dattaram...!");
    res.end();
  }
});
server.listen(4000);
console.log("listening on 4000 port ");
