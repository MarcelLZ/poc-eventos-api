export function success (response, statusCode = 200) {
  return function (payload) {
    return response
      .status(statusCode)
      .json(payload)
  }
}

export function error (response, statusCode = 500) {
  return function (payload) {
    return response
      .status(statusCode)
      .json(payload)
  }
}

export function notFound (response) {
  return function (payload) {
    if (payload) return payload

    return response
      .status(404)
      .end()
  }
}
