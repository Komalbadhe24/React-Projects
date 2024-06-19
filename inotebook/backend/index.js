const connectToMongo=require('./db')
var cors = require('cors')

connectToMongo()

const express = require('express')
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))
app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
})