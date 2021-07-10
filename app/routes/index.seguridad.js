const express = require("express");
const router = express.Router();
const controller = require("../controllers/file.seguridad");

let routes = (app) => {
  router.post("/upload/seguridad", controller.upload);
  router.get("/files/seguridad", controller.getListFiles);
  router.get("/files/seguridad/:name", controller.download);

  app.use(router);
};

module.exports = routes;
