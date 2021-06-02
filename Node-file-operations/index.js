const File = require("./file");

let fileObj = new File("file.txt");

fileObj.writeToFile("Hello Folks..Welcome to the world of Node.js!\n");

fileObj.readFromFile();

fileObj.appendToFile("Append this content to the file");

let deleteFile = fileObj.deleteFile.bind(fileObj);
setTimeout(deleteFile, 3000);
