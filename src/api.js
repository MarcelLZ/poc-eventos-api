import { Router } from 'express'

const router = new Router()

router.get('', (request, response) => response.json([]))
router.post('', (request, response) => response.sendStatus(204))
router.put('/:id', (request, response) => response.sendStatus(204))
router.delete('/:id', (request, response) => response.sendStatus(204))

export default router
