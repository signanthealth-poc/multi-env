const http = require('http');

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV || 'dev';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello from ${ENV} environment!`);
});

server.listen(PORT, () => {
  console.log(`Server running in ${ENV} environment on port ${PORT}`);
});
