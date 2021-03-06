const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const WorkoutSchema = new Schema

const WorkoutSchema = new Schema({
  day: {
      type: Date,
      default: () => new Date() //creates date if no date
  },
  exercises: [
      {
          type: {
              type: String,
              required: "type is required",
              trim: true
          },
          name: {
              type: String,
              required: "Name is required",
              trim: true
          },
          duration: {
              type: Number,
              required: "Duration is required",

          },
          weight: {
              type: Number,
          },
          reps: {
              type: Number,
          },
          sets: {
            type: Number,
          },
          distance: {
              type: Number,
          }

      }
  ]
},{
    toJson:{
        virtuals:true,
    }
});

// WorkoutSchema.virtual("totalDuration").get(function
//     ())

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
