const { initElectron } = require("./electron/electron.js");
const { runWebServer } = require("./WebSocketServer/WebSocketServer.js");
runWebServer();
initElectron();
