
const express = require('express')
const app = express()
const port = 4000
const mongoConnect = require('./db')
const createUser = require('./routes/createUser')

mongoConnect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Route for createUser
app.use(express.json())
app.use('/api', createUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})