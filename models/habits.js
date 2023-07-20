
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  habitName: {
    type: String,
    required: true
  },
  best: {
    type: Number,
    required: true
  },
  streak:{
    type:Number,
    default:0
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  days: {
    one:{
        type:String,
        default:null
    },
    two:{
        type:String,
        default:null
    },
    three:{
        type:String,
        default:null
    },
    four:{
        type:String,
        default:null
    },
    five:{
        type:String,
        default:null
    },
    six:{
        type:String,
        default:null
    },
    seven:{
        type:String,
        default:null
    }
  }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
