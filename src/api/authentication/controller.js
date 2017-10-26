// import User from './model'

export const githubAuthenticationCallback = (request, response) =>
  console.log('response:', response) // TODO Persistir infos do usuário

export const authenticate = (request, response) =>
  response.redirect('/auth')
