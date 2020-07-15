'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todo.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
    {
      sequelize,
      modelName: 'todo',
    });
  todo.associate = function (models) {
    todo.belongsTo(models.user);
    todo.hasMany(models.todoItem);
  };

  return todo;
};