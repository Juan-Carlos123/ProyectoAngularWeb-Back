const { authJwt } = require("../middleware");

module.exports = app => {
  const trabajadores = require("../controllers/trabajador.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", [authJwt.verifyToken], trabajadores.create);

  // Retrieve all Tutorials
  router.get("/", [authJwt.verifyToken], trabajadores.findAll);

  // Retrieve all published Tutorials
  //router.get("/published", empresa.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", [authJwt.verifyToken], trabajadores.findOne);

  // Update a Tutorial with id
  router.put("/:id", [authJwt.verifyToken], trabajadores.update);

  // Delete a Tutorial with id
  router.delete("/:id", [authJwt.verifyToken], trabajadores.delete);

  // Delete all Tutorials
  router.delete("/", [authJwt.verifyToken], trabajadores.deleteAll);

  app.use('/api/trabajador', router);
};