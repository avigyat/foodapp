const { body, validationResult } = require('express-validator');
const express = require('express')
const app = express()
const port = 4000
const mongoConnect = require('./db')
mongoConnect();

app.use(express.json())
//using cors
var cors = require('cors')
app.use(cors());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Origin","http://localhost:4000/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})



//Routes

app.use('/api', require('./routes/createUser'))
app.use('/api/auth', require('./routes/loginUser'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})