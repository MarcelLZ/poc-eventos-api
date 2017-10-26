import { Router } from 'express'

import events from './events'
import authentication from './authentication'

const router = new Router()

router.use('/events', events)
router.use('/auth', authentication)

export default router
