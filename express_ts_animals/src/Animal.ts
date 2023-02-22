/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
const { Schema } = mongoose;
const taskSchema = new Schema({
  name: String,
  img: String,
  type: String, // String is shorthand for {type: String}
});

export default mongoose.model('Animal', taskSchema);

