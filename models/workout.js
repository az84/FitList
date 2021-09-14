const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    reps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;
