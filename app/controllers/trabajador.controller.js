const db = require("../models");
const Trabajadores = db.trabajadores
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

  nu1 = req.body.talla,
  nu2 = req.body.peso

  var resul = nu2/(nu1*nu1);
  //console.log(resul)

  // Create a Tutorial
  const trabajadores = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    cargo: req.body.cargo,
    fecha_nacimiento: req.body.fecha_nacimiento,
    dni: req.body.dni,
    direccion: req.body.direccion,
    talla: req.body.talla,
    peso: req.body.peso,
    masa_corporal: resul,
    telefono: req.body.telefono,
  }

  // Save Tutorial in the database
  Trabajadores.create(trabajadores)
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
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Trabajadores.findAll({condition})
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

  Trabajadores.findByPk(id)
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

  nu1 = req.body.talla,
  nu2 = req.body.peso

  var resul = nu2/(nu1*nu1);
  //console.log(resul)

  // Create a Tutorial
  const datos = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    cargo: req.body.cargo,
    fecha_nacimiento: req.body.fecha_nacimiento,
    dni: req.body.dni,
    direccion: req.body.direccion,
    talla: req.body.talla,
    peso: req.body.peso,
    masa_corporal: resul,
    telefono: req.body.telefono,
  }

  Trabajadores.update(datos, {
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

  Trabajadores.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          mensaje: "¡Empresa se eliminó correctamente!"
        });
      } else {
        res.send({
          mensaje: `No se puede eliminar el tutorial con id=${id}. ¡Quizás no se encontró el Tutorial!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        mensaje: "No se pudo eliminar la empresa con id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Trabajadores.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ mensaje: `${nums} ¡Las empresas fueron eliminadas con éxito!` });
    })
    .catch(err => {
      res.status(500).send({
        mensaje:
          err.message || "Se produjo algún error al eliminar todas las empresas."
      });
    });
};

