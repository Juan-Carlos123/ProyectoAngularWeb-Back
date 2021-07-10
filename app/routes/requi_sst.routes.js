module.exports = app => {
  const requisitos_seguridad = require("../controllers/requi_sst.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", requisitos_seguridad.create);

  // Retrieve all Tutorials
  router.get("/", requisitos_seguridad.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", empresa.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", requisitos_seguridad.findOne);

  // Update a Tutorial with id
  router.put("/:id", requisitos_seguridad.update);

  // Delete a Tutorial with id
  router.delete("/:id", requisitos_seguridad.delete);

  // Delete all Tutorials
  router.delete("/", requisitos_seguridad.deleteAll);

  app.use('/api/requisitos_sst', router);
};