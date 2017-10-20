import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './api'

const PORT = process.env.PORT || 3000

express()
  .use('*', cors({ origin: '*' }))
  .use(bodyParser.json())
  .use('/eventos', api)
  .get('/', (req, res) => res.json({ healthCheck: true }))
  .listen(PORT, () => console.log(`Running! Access http://localhost:${PORT}`))

