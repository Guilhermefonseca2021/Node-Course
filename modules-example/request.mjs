const REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return "ecrypted data";
}

export function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

console.log(module);
export { REQUEST_TIMEOUT }