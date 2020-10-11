const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ulster County!!!! You requested! ' + req.url)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})