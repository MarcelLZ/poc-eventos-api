import Event from './model'
import _ from 'lodash'
import { success, notFound } from '../../services/response'

export const index = ({ query }, response, next) => {
  Event.find(query)
    .then(events => events.map(event => event.view()))
    .then(success(response))
    .catch(next)
}

export const create = ({ bodymen: { body } }, response, next) =>
  Event.create({ ...body })
    .then(event => event.view())
    .then(success(response))
    .catch(next)

export const update = ({ bodymen: { body }, params }, response, next) =>
  Event.findById(params.id)
    .then(notFound(response))
    .then(event => _.merge(event, body).save())
    .then(success(response))
    .catch(next)

export const destroy = ({ params }, response, next) =>
  Event.findById(params.id)
    .then(notFound(response))
    .then(event => event.remove())
    .then(success(response, 201))
    .catch(next)
