import { send } from './request.mjs';
import { read } from './response';

function makeRequest(url, data) {
  send(url, data);
  return read();
};

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData)



// node
// welcome to node [...]
// >require.extensions

// over us we can see the extensions files default.