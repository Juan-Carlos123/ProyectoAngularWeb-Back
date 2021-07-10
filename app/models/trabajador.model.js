module.exports = (sequelize, Sequelize) => {
  const Trabajadores = sequelize.define("trabajadores", {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    edad: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cargo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fecha_nacimiento: {
      type: Sequelize.DATE,
      allowNull: false
    },
    dni: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    direccion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    talla: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    peso: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    masa_corporal: {
      type: Sequelize.DOUBLE,
      allowNull: true,
    },
    telefono: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  },{
    timestamps: false,
    freezeTableName: true
  });

  return Trabajadores;
};