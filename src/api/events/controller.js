import Event from './model'
import { success } from '../../services/response'

export const index = ({ query }, response, next) => {
  console.log(query)
  Event.find(query)
    .then(events => events.map(event => event.view()))
    .then(event => success(response, event))
    .catch(next)
}

export const create = ({ bodymen: { body } }, response, next) =>
  Event.create({ ...body })
    .then(event => event.view())
    .then(event => success(response, event))
    .catch(next)

export const update = ({ params }, response, next) => {}

export const destroy = ({ params }, response, next) => {}
