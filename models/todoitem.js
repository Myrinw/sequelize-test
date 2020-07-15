'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todoItem.init({
    task: DataTypes.STRING,
    deadline: DataTypes.DATE,
    todoList: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'todoItem',
  });
  todoItem.associate = function (models) {
    todoItem.belongsTo(models.todo);
  }
  return todoItem;
};