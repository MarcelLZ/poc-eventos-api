import { Router } from 'express'

const router = new Router()

router.get('', (request, response) => response.json([]))
router.post('', (request, response) => response.send('Você inseriu um novo registro!'))
router.put('/:id', (request, response) => response.send(`Você atualizou o registro de id: ${request.params.id}`))
router.delete('/:id', (request, response) => response.send(`Você excluiu o registro de id: ${request.params.id}`))

export default router
