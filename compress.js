const inputDir = process.argv[2];
const outputDir = process.argv[3];

const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

const supportedImageFile = [
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
  ".tiff",
];

if (outputDir && !fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const isFile = (file) => {
  return fs.lstatSync(file).isFile();
};

const compressImage = (oldFilePath, newFilePath, size) => {
  sharp(oldFilePath)
    .resize(size)
    .toFile(newFilePath, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
};

fs.readdirSync(inputDir)
  .map((file) => {
    return path.join(inputDir, file);
  })
  .filter(isFile)
  .forEach((file) => {
    const fileData = path.parse(file);
    const newFilePath = path.join(
      outputDir || inputDir,
      `${fileData.name}-min${fileData.ext}`
    );

    if (!supportedImageFile.includes(fileData.ext)) return;
    if (fileData.name.includes("min")) return;

    compressImage(file, newFilePath, 50);
  });
