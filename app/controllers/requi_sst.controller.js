const db = require("../models");
const Requi_sst = db.requisitos_seguridad;
const Op = db.Sequelize.Op;

/*// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};*/

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      mensaje: "¡El contenido no puede estar vacío!"
    });
    return;
  }

  // Create a Tutorial
  const requisitos_seguridad = {
    nivel_riesgo: req.body.nivel_riesgo,
    tarea: req.body.tarea,
    fecha_inicio: req.body.fecha_inicio,
    fecha_fin: req.body.fecha_fin,
    supervisor: req.body.supervisor,
    Riesgo_bajo_id: req.body.Riesgo_bajo_id,
    Riesgo_medio_id: req.body.Riesgo_medio_id,
    Riesgo_Alto_id: req.body.Riesgo_Alto_id,
  }

  // Save Tutorial in the database
  Requi_sst.create(requisitos_seguridad)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        mensaje:
          err.message || "Se produjo un error al crear los campos."
      });
    });
};

exports.findAll = (req, res) => {
  const nivel_riesgo = req.query.nivel_riesgo;
  var condition = nivel_riesgo ? { nivel_riesgo: { [Op.like]: `%${nivel_riesgo}%` } } : null;

  Requi_sst.findAll({condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        mensaje:
          err.message || "Ocurrió algún error al recuperar las empresas."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Requi_sst.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        mensaje: "Error al recuperar la empresa con id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Requi_sst.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          mensaje: "Empresa se actualizó correctamente."
        });
      } else {
        res.send({
          mensaje: `No se puede actualizar el tutorial con id=${id}. ¡Quizás no se encontró el tutorial o el cuerpo requerido está vacío!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        mensaje: "Error al actualizar el tutorial con id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Requi_sst.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          mensaje: "¡Empresa se eliminó correctamente!"
        });
      } else {
        res.send({
          mensage: `No se puede eliminar el tutorial con id=${id}. ¡Quizás no se encontró el Tutorial!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        mensage: "No se pudo eliminar la empresa con id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Requi_sst.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ mensage: `${nums} ¡Las empresas fueron eliminadas con éxito!` });
    })
    .catch(err => {
      res.status(500).send({
        mensage:
          err.message || "Se produjo algún error al eliminar todas las empresas."
      });
    });
};

