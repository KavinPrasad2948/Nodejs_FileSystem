const express = require("express");
const parser = require("body-parser");
// const { JSONFilePreset } = require("lowdb/node");
const { createFile, readDirectory } = require("./Utils/CreateFile");
const HTTP_SERVER = express();
const PORT = '5000';

HTTP_SERVER.use(parser.json());

HTTP_SERVER.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


HTTP_SERVER.post("/create", (request, response) => {
    const { fileName, fileContent } = request.body;
    createFile(fileName, fileContent)
      .then(() => {
        response.status(201).json({
          message: "File created successfully",
        });
      })
      .catch((error) => {
        response.status(500).json({
          message: "Error creating file",
          error,
        });
      });
  });
  HTTP_SERVER.get("/files", (request, response) => {
    readDirectory()
    .then(files =>{
      response.status(200).json(files);
    })
    .catch((error) => {
      response.status(500).json({
        message: "Error reading files",error,
      })
    });
  })