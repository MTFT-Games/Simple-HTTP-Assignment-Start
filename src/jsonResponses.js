const text = require('./textResponses.js');

function getHelloJSON(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({ message: text.hello }));
  response.end();
}

function getTimeJSON(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({ message: text.getTimeString() }));
  response.end();
}

module.exports = { getHelloJSON, getTimeJSON };
