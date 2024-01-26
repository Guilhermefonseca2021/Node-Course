const http = require("http");
const { request } = require("http");

const response = http.request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data...");
  });
});

const req = request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data...");
  });
});

// this will cause the request to send.
response.end();
req.end()
