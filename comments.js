// Create web server
// Create a web server that listens on port 8080 and returns the comment data. The data is a JSON array of objects. Each object has the following format:
// {
//   "name": "Name",
//   "comment": "Comment"
// }
// The server should return the following JSON array of objects when a GET request is made to the root URL:
// [
//   {
//     "name": "Name 1",
//     "comment": "Comment 1"
//   },
//   {
//     "name": "Name 2",
//     "comment": "Comment 2"
//   },
//   {
//     "name": "Name 3",
//     "comment": "Comment 3"
//   }
// ]
// Remember to set the Content-Type header to application/json in the response.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = [
    {
      name: 'Name 1',
      comment: 'Comment 1',
    },
    {
      name: 'Name 2',
      comment: 'Comment 2',
    },
    {
      name: 'Name 3',
      comment: 'Comment 3',
    },
  ];
  res.end(JSON.stringify(data));
});

server.listen(8080);