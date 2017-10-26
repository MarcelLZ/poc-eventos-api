import passport from 'passport'
import { Strategy as GithubStrategy } from 'passport-github2'
import config from './config'

passport.use(new GithubStrategy({
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: 'http://localhost:3002/auth/callback'
}, (accessToken, refreshToken, profile, done) =>
  done(null, {
    accessToken,
    profile
  })
))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

export default passport
