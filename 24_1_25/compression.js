const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const PORT = 3000;

// Create an HTTP server
http.createServer((req, res) => {
  // Check the requested URL
  if (req.url === '/file') {
    // Get the file to serve
    const fileStream = fs.createReadStream('../19_1_25/promiseAll.html'); // Replace with your file
    const gzipStream = zlib.createGzip(); // Create a Gzip compression stream

    // Set headers to inform the client about compression
    res.writeHead(200, {
      'Content-Encoding': 'gzip', // Inform the client the content is Gzip compressed
      'Content-Type': 'text/html', // Change this based on the file type
    });

    // Pipe the file through the Gzip stream and send it to the client
    fileStream.pipe(gzipStream).pipe(res); // here the res.end() we will be automatically triggered when the readstream finishes.
  } else {
    // Default response for other routes
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello! Request /file to get the compressed file.');
  } 
}).listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
