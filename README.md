## Crash Course Node.JS

<A href="https://www.youtube.com/watch?v=fUJ3ULyyA-Y&list=PLVQmnJOxIUz9JYhpHPa9bBRDPGqhsuP5q&index=5&t=15069s&ab_channel=ZeroToMastery">Click here to see the content, with material. </a>

## Lessons

- [] Auth
- [] Cluster
- [] Scalling
  - [] PM2
  - [] AWS
- [] Docker
- [] MongoDB
  - [] Internal architeture
  - [] Performance
- [] Security
- [] GraphQL APIs
  - [] express 
  - [] sockets
  - [] design patterns
  
## Engine V8

the browser have a engine to run javascript versions on navigator, the node use the same system to create api with javascript. it's a run time language to communicate with the engine v8 in a phone or anywhere outside of the browser with a lot of components.

## NodeJS vs Javascript

- in browser we have window, document, history, location, navigator
- in node.js we have instead
global as window,
proccess as document,
history as module,
__filename as location,
require as navigator

## Backend vs Frontend

the backend is what happens in the system that is being hiding from the user. Frontend we show informations, google is a server with pages frontend, but the data from the every search adn response is from the backend the part of security.
<img width="1423" alt="backendVSfrontend" src="https://github.com/Guilhermefonseca2021/Kafene/assets/92196697/3f29213c-b31a-41a0-a8ff-08408eb06b88">

## Node + Node.binding + Libuv

libuv have references to systems like android, fs.c, making api bindins and file extensions. Libuv is a igh level language behind the node where we can explore the libraries that are updating systems like linux for example.


## Non-blocking functions And Multi-Threading.

the CPU is passing off or delegating our data, blocking function can take a long time to complete, waiting for output not in non-blocking, make sure take our CPU is estabilish.  Multi-threading allows our  program to run code with more multiple information.
```js
firstFunction() {
  secondFunction();
}

secondFunction() {
  return 42
}

new Thread(firstFunction);
new Thread(firstFunction);
```
start this threads as soon as possible, with single system operation. Node execute javascript files, one threading is running in v8, 

## Event Loop phases

- [x] Timer
  - [x] setTimeout
  - [x] setInterval  (loops)
  - [x] setImmediate (timer, set callback execute as soon as possible.)
- [x] I/O callbacks
- [x] setImmediate
- [x] close Callbacks

## Events

Node emit events when callbacks are executed, on base of results.

## Node Modules

Reuse existing code, organize, expose only what will be used. 
- https modules have requests and responses.
- request.js, response.js

