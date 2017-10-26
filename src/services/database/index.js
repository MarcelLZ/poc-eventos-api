import mongoose, { Schema } from 'mongoose'
import bluebird from 'bluebird'
import config from './configs'

// Set mongoose promise
mongoose.Promise = bluebird

// Function to create url connection
const _connection = variables => {
  const username = variables.MONGO_USERNAME || config.mongo.username
  const password = variables.MONGO_PASSWORD || config.mongo.password
  const host = variables.MONGO_HOST || config.mongo.host
  const port = variables.MONGO_PORT || config.mongo.port
  const database = variables.MONGO_DATABASE || config.mongo.database
  const auth = username ? `${username}:${password}@` : ''

  return `mongodb://${auth}${host}:${port}/${database}`
}

const _urlConnection = _connection(process.env)

// Init connection
mongoose.connect(_urlConnection, {
  useMongoClient: true,
  promiseLibrary: bluebird
})

const database = mongoose.connection

database.on('error', () => console.log(`Failed to connect : ${_urlConnection}`))
database.once('open', () => console.log(`Connected : ${_urlConnection}`))

// Export instance
export { Schema }
export default mongoose
