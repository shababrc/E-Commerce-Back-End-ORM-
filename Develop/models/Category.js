const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // adding columns to the category table,
    // Specifying the requirements and types for each column.

    // a column for the category id, type of integer,
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // a column for the category_name, type of string,
    // and cannot be null.
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  // necessary to include the Category model, including 
  // sequelize as a dependency.
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
