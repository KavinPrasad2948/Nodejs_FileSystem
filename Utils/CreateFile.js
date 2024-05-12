const fs = require("node:fs/promises");

async function createFile(fileName = "", content = "") {
  // Get current date and time
  const now = new Date();
  
  // Format date and time for file content
  const formattedDateTime = now.toString();

  // Format time for file name (HHMMSS format)
  const timeForFileName = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

  // Write to file
  const fileNameWithTime = `${fileName}_${timeForFileName}`;
  const contentWithDateTime = `${content}\nDate and Time: ${formattedDateTime}`;

  return fs.writeFile(`./files/${fileNameWithTime}.txt`, contentWithDateTime, "utf8");
}

async function readDirectory() {
  return fs.readdir("./files");
}

module.exports = {
  createFile,
  readDirectory,
};
