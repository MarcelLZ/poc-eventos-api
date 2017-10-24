export function success (response, payload = {}, statusCode = 200) {
  return response
    .status(statusCode || 200)
    .json(payload)
}

export function error (response, payload = {}, statusCode = 500) {
  return response
    .status(statusCode)
    .json(payload)
}

export function notFound (response) {
  return response
    .status(404)
    .end()
}
