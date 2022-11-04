const ffmpeg = require("fluent-ffmpeg");
const { join } = require("path");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffprobePath = require("@ffprobe-installer/ffprobe").path;
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

// const cropFile = async () => {
//   ffmpeg("file.mp3")
//     .setStartTime("00:00:04")
//     .setDuration("2")
//     .output("3.mp3")
//     .on("end", function (err) {
//       if (!err) {
//         console.log("conversion Done");
//       }
//     })
//     .on("error", (err) => console.log("error: ", err))
//     .run();
// };

// merge audio
// ffmpeg("./1.mp3")
//   .input("./2.mp3")
//   .input("./3.mp3")
//   .input("./4.mp3")
//   .input("./5.mp3")
//   .input("./6.mp3")
//   .input("./7.mp3")
//   .input("./8.mp3")
//   .input("./9.mp3")
//   .input("./10.mp3")
//   .on("error", (error) => {
//     console.log(error);
//   })
//   .on("start", () => {
//     console.log(`Mergeing Started `);
//   })
//   .on("end", () => {
//     console.log(`Merge Completed`);
//   })
//   .mergeToFile(join("./", "count.mp3"), "./");

var mergeFile = ffmpeg();

for (let i = 1; i <= 10; i++) {
  mergeFile = mergeFile.addInput(`./${i}.mp3`);
}

mergeFile
  .on("error", function (err) {
    console.log("Error " + err.message);
  })
  .on("end", function () {
    console.log("Finished!");
  })
  .mergeToFile(join("./", "count.mp3"), "./");
