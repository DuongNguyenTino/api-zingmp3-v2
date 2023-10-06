const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to mongodb successfully !')
  })
  .catch(() => {
    console.log('Connected to mongodb failed !')
  })
}

module.exports = connectDB
