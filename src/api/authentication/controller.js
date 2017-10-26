// import User from './model'
import axios from 'axios'

export const githubAuthenticationCallback = (request, response, next) => next()
export const authenticate = (request, response) => response.redirect('/auth')

export const auth = (request, response) => {
  const { code } = request.body
  let data = {
    code,
    'client_id': '29186b8e25b21408ef61',
    'client_secret': 'c5c40d59df26aeaddb9ceae7e4943bf8c172b3d3',
    'redirect_uri': 'http://localhost:3000/auth/callback',
    'grant_type': 'grant_type'
  }

  axios
    .post('https://github.com/login/oauth/access_token', data, { 'Content-Type': 'application/json' })
    .then(res => response.json({ token: res.data }))
    .catch(console.log)
}
