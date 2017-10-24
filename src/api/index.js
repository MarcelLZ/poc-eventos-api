import { Router } from 'express'

import events from './events'

const router = new Router()

router.use('/events', events)

export default router
