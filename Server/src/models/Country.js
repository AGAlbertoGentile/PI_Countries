const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      validate: {
        isAlpha: true,
        isUppercase: true,
        isThree: (cod) => {
          if (cod.length !== 3) {
            throw Error('Country ID must consist of 3 uppercase letters.')
          }
        }
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.ENUM,
      values: ["Europe", "Asia", "Africa", "Oceania", "Antarctica", "North America", "South America"],
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subRegion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maps: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
    { timestamps: false});
};