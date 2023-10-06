const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const http = require('http')
const path = require('path')
const connectDB = require('./configs/db')
require('dotenv').config()

const ZingMp3Router = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

connectDB()

app.use('/api/v2', cors(), ZingMp3Router)

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('*', (req, res) => {
  res.send('Đường dẫn không tồn tại !')
})

const port = process.env.PORT || 4000

const server = http.createServer(app)

server.listen(port, () => {
  console.log('Server is listening on ', port)
})
