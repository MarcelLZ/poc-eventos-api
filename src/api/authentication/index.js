import { Router } from 'express'
import passport from '../../services/passport'
import { githubAuthenticationCallback, auth } from './controller'

const router = new Router()

/**
 * Essa rota deveria redirecionar o usuário para a página do github
 */
router.get('/', passport.authenticate('github', { scope: [ 'user:email' ] }))

/**
 * Essa url o github chama para nos devolver algumas infos do usuário
 */
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  githubAuthenticationCallback
)

router.post('/teste',auth)

export default router
