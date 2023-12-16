const fs = require("fs");

// reading files
/*
fs.readFile("./docs/notes.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else console.log(data.toString());
});*/

// writing files
/*
fs.writeFile("./docs/notes.txt", "Hello ninjas", () => {
  console.log("File was written");
});*/

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
    else console.log("Folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) console.log("Error!");
    else console.log("Folder deleted");
  });
}

// Removing files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) console.log(err);
    else console.log("File removed");
  });
}
