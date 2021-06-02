const FS = require("fs");

class File {
  constructor(filePath) {
    this.filePath = filePath;
  }

  writeToFile(content) {
    FS.writeFile(this.filePath, content, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Content Sucessfully Written to File");
      }
    });
  }

  readFromFile() {
    FS.readFile(this.filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(data);
      }
    });
  }

  appendToFile(content) {
    FS.appendFile(this.filePath, content, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Content succesfully appended to the file!\n");
      }
    });
  }

  deleteFile() {
    FS.unlink(this.filePath, (err) => {
      if (err) {
        console.log("An error occured");
      } else {
        console.log("File Successfully Deleted!");
      }
    });
  }
}

module.exports = File;
