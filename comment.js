// Create web server
// Run the server
// Open the browser and test the server
// Create a router
// Create a handler
// Create a response
// Send the response
// Test the server
// Add a route for a missing page
// Test the server
// Serve static files
// Test the server
// Add a form
// Test the server
// Post data
// Test the server
// Redirect after post
// Test the server
// Add a 404 page
// Test the server
// Add a 500 page
// Test the server
// Add a 405 page
// Test the server

// 1. Create web server
const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

const server = http.createServer()

// 2. Run the server
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})

// 3. Open the browser and test the server

// 4. Create a router
server.on('request', (req, res) => {
  const method = req.method
  const path = url.parse(req.url).pathname
  const query = url.parse(req.url, true).query

  console.log(method, path)

  // 5. Create a handler
  if (method === 'GET' && path === '/') {
    // 6. Create a response
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hello, World!</h1>')
    res.end()
  } else if (method === 'GET' && path === '/comment') {
    // 6. Create a response
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Comment</h1>')
    res.end()
  } else if (method === 'GET' && path === '/comment/new') {
    // 6. Create a response
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>New Comment</h1>')
    res.write('<form method="POST" action="/comment/new">')
    res.write('<input type="text" name="comment" />')
    res.write('<input type="submit" value="Submit" />')
    res.write('</form>')
    res.end()
    }
    // 7. Send the response
    else if (method === 'POST' && path === '/comment/new') {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        const comment = new URLSearchParams(body).get('comment')
        console.log(comment)
        res.writeHead(302, { 'Location': '/comment' })
        res.end()
      })
    } else {
      // 7. Send the response
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write('<h1>Not Found</h1>')
      res.end()
    }
    })