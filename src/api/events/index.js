import { Router } from 'express'
import { middleware as body } from 'bodymen'

import { eventSchema } from './model'
import { index, create } from './controller'

const router = new Router()
const { title, link, price, image, shortDescription } = eventSchema.tree

router.get('/', index)

router.post(
  '/',
  body({ title, link, price, image, shortDescription }),
  create
)

router.put(
  '/:id',
  (request, response) => response.send(`Você atualizou o registro de id: ${request.params.id}`)
)

router.delete(
  '/:id',
  (request, response) => response.send(`Você excluiu o registro de id: ${request.params.id}`)
)

export default router
