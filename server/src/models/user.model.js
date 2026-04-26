const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    monthlyIncome: {
      type: Number,
      default: 0,
    },
    employmentType: {
      type: String,
      enum: ['student', 'salaried', 'self-employed'],
      default: 'student',
    },
    riskProfile: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'low',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);