import mongoose, { Schema } from '../../services/database'

const eventSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  price: { type: String, default: 'free' },
  image: { type: String },
  shortDescription: { type: String, required: true }
  // date: Object,
  // innerLink: { type: String, required: true },
  // location: Object,
})

eventSchema.methods = {
  view () {
    return {
      id: this.id,
      title: this.title,
      link: this.link,
      price: this.price,
      image: this.image,
      shortDescription: this.shortDescription
    }
  }
}

export default mongoose.model('Events', eventSchema)
export { eventSchema }

/**
 * Example
 *
{
  "title": "2º Vue.js Floripa",
  "date": {
    "day": "18",
    "month": "Outubro",
    "year": 2017
  },
  "innerLink": "inner.html",
  "link": "https://www.meetup.com/pt-BR/floripa-vuejs/events/243932293/",
  "price": "Free",
  "location": {
    "city": "Florianópolis",
    "state": "SC",
    "address": "Chaordic",
    "locationUrl": "https://maps.google.com/maps?f=q&hl=en&q=Av.+Afonso+Delambert+Neto%2C+26+-+Lagoa+da+Concei%C3%A7%C3%A3o%2C+Florian%C3%B3polis%2C+br"
  },
  "image": "https://secure.meetupstatic.com/photos/theme_head/8/a/6/a/full_7535434.jpeg",
  "shortDescription": "Agora dia 18 de outubro a partir das 19:30h na Chaordic vai rolar o segundo encontro do Vue.js Floripa! Seja você desenvolvedor, frontend, backend, designer ou amante de tecnologia, contamos com a sua presença! Lembrando a todos que o evento é gratuito."
}
 */
