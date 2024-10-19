const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send({x: 1})
})

app.post('/', (req, res) => {
    res.send({x: 'Post'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})