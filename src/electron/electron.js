const { app, BrowserWindow, ipcMain } = require("electron");
const { builtinModules } = require("module");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname,"preload.js"),
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname,"template/index.html"));
}

function initElectron() {
  app.whenReady().then(() => {
    createWindow();
    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
  });
}

module.exports.initElectron = initElectron;
