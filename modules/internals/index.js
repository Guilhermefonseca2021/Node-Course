// const request = require("./request")
// const response = require("./response")

// module.exports = {
//   send: request.send,
//   REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//   read: response.read
// };

// another way to same result over is use spread.
module.exports = {
  ...request("./request"),
  ...Response("./response"),
};
