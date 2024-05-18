const express = require("express");
const parser = require("body-parser");
const { createFile, readDirectory } = require("./Utils/CreateFile");
const mongoose = require('./DB/DB');
const HTTP_SERVER = express();
const PORT = '5000';

HTTP_SERVER.use(parser.json());

HTTP_SERVER.listen(PORT,()=>{
    console.log("Server is running on port 5000");
})

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