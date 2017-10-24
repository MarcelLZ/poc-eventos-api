import Event from './model'
import { success } from '../../services/response'

export const index = (request, response, next) => {
  return Event.find({})
    .then(events => events.map(event => event.view()))
    .then(event => success(response, event))
    .catch(next)
}

export const create = ({ bodymen: { body } }, response, next) => {
  return Event.create({ ...body })
    .then(event => event.view())
    .then(event => success(response, event))
    .catch(next)
}
