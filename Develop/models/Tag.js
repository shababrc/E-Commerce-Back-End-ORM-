const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    //a column for id 
    //this is the primary key
    //id is auto incremented
    //cannot be null
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //a column for tag_name
    //type is string
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  //necessary to include the Tag model, including 
  //sequelize as a dependency.
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
