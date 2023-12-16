const fs = require("fs");

const readStream = fs.createReadStream("./docs/notes2.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./docs/notes3.txt");
/* 
readStream.on("data", (chunk) => {
  writeStream.write("\n NEW CHUNK \n");
  writeStream.write(chunk);
});
 */

// Piping
readStream.pipe(writeStream);
