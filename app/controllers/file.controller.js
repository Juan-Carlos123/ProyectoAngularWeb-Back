const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "http://localhost:8080/files/";

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "¡Sube un archivo!" });
    }

    res.status(200).send({
      message: "Se subió correctamente los archivos: " + req.file.originalname,
    });
    
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "¡El tamaño del archivo no puede superar los 2 MB!",
      });
    }

    res.status(500).send({
      message: `No se pudo cargar el archivo: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/public/uploads/Documentos_Covid/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "¡No se pueden escanear archivos!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/public/uploads/Documentos_Covid/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "No se pudo descargar el archivo. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
};
