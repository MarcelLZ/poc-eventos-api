import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from './services/passport'
import api from './api'

const PORT = process.env.PORT || 3001

express()
  .use('*', cors({ origin: '*' }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(passport.initialize())
  .use(passport.session())
  .use('/', api)
  .get('/', (request, response) => response.json({ healthCheck: true }))
  .listen(PORT, () => console.log(`Running! Access http://localhost:${PORT}`))
