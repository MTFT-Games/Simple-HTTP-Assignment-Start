const fs = require('fs');

const meme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

function getMeme(request, response) {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(meme);
  response.end();
}

module.exports = { getMeme };
