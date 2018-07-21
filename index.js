// Load Express framework
const express = require('express')	// Import Express Js module
const app = express()	// Create a server

// Set responds to HTTP GET requests with the specified URL path ('/') and send 'Hello from Express Js'
app.get('/', (req, res) => res.send('Hello from Express Js'))

// Set the server to listens for HTTP requests on port 8000 and print a message to the browser console
app.listen(8000, () => console.log('Hello Express app listening on port 8000!'))