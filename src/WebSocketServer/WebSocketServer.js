const child = require("child_process").execFile;
const path = require("path");
const FILEPATH = path.join(
  __dirname,
  "WebSocketServer.exe",
);

function runWebServer() {
  child(FILEPATH, (err) => {
    console.log("Error WebSocket Server ", err);
  });
}
module.exports.runWebServer = runWebServer;
