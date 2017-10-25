import { Router } from 'express'
import { middleware as body } from 'bodymen'

import { eventSchema } from './model'
import { index, create, update, destroy } from './controller'

const router = new Router()
const {
  title,
  link,
  price,
  image,
  shortDescription
} = eventSchema.tree

/**
 * Get all events
 */
router.get(
  '/',
  index
)

/**
 * Create an event
 */
router.post(
  '/',
  body({ title, link, price, image, shortDescription }),
  create
)

/**
 * Update an event
 */
router.put(
  '/:id',
  body({ title, link, price, image, shortDescription }),
  update
)

/**
 * Delete an event
 */
router.delete(
  '/:id',
  destroy
)

export default router
