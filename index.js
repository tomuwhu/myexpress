const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send({x: 1})
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send({x: 'Post'})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})