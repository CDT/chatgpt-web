const express = require('express')
const app = express()

// serve static files from the "static" directory
// app.use(require('connect-history-api-fallback')())
app.use(express.static('./dist'))

app.listen(8888, () => {
  console.log('Server running on port 8888')
})