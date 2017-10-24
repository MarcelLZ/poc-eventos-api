import mongoose, { Schema } from 'mongoose'
import bluebird from 'bluebird'
import config from '../config'

// Set mongoose promise
mongoose.Promise = bluebird

// Function to create url connection
const _connection = variables => {
  const username = variables.MONGO_USERNAME || config.mongo.username,
    password = variables.MONGO_PASSWORD || config.mongo.password,
    host = variables.MONGO_HOST || config.mongo.host,
    port = variables.MONGO_PORT || config.mongo.port,
    database = variables.MONGO_DATABASE || config.mongo.database,
    auth = username ? `${username}:${password}@` : ''

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
