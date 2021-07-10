module.exports = (sequelize, Sequelize) => {
  const Requi_sst = sequelize.define("requisitos_seguridad", {
    nivel_riesgo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tarea: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fecha_inicio: {
      type: Sequelize.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: Sequelize.DATE,
      allowNull: false
    },
    supervisor: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Riesgo_bajo_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Riesgo_medio_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Riesgo_Alto_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
  },{
    timestamps: false,
    freezeTableName: true
  });

  return Requi_sst;
};