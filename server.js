const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5002;
const file = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); res.end('Server error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Tracksip policy running on port ${PORT}`));
