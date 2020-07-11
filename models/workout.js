const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date, 
    default: new Date },

  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Exercise Type is Required"
    },
    name: {
      type: String,
      trim: true,
      required: "Exercise Name is Required"
    },
    duration: {
      type: Number,
      required: "Exercise Duration is Required"
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    },
    totalDuration: {
      type: Number
    }
  }]
},
{
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total, exercise)=> {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
