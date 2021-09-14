const User = require('./User');
const Workout = require('./Workout');


User.hasMany(Workout, {

});

Workout.belongsTo(User, {

});

module.exports = { User, Workout };
