import mongoose, { Schema } from '../../services/database'

const userSchema = new Schema({
  name: { type: String, required: true },
  token: { type: String, required: true }
})

userSchema.methods = {
  view () {
    return {
      id: this.id,
      name: this.name,
      token: this.token
    }
  }
}

export default mongoose.model('Events', userSchema)
export { userSchema }
