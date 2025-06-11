import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['frontend', 'backend', 'database', 'tools', 'other']
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  icon: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Skill', skillSchema); 