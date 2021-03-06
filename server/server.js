import config from './../config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoURI}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info("Server started on port %s.", config.port)
})
