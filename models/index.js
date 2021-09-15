const User = require('./User');
const Workout = require('./Workout');
const Exercise = require('./Exercise');
const WorkoutExercise = require('./workoutExercise');

Workout.belongsToMany(Exercise, {
  through: { model:WorkoutExercise,
  foreignKey: 'workout_id'
  }
  });

Exercise.belongsToMany(Workout, {
  through: { model:WorkoutExercise,
  foreignKey: 'exercise_id'
  }
  });

Workout.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Workout, {
  foreignKey: 'user_id',
});

module.exports = { User, Workout, Exercise, WorkoutExercise };
