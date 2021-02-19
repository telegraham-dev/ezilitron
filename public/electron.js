const { app, BrowserWindow } = require("electron");
//const { autoUpdater } = require("electron-updater");
const isDev = require("electron-is-dev");
const path = require("path");

// autoUpdater.logger = require("electron-log");
// autoUpdater.logger.transports.file.level = "info";

let mainWindow = null;

function createWindow() {
  const mainWindow = new BrowserWindow({
    title: "Ezilitron",
    resizable: true,
    moveable: true,
    frame: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      // webviewTag: true,
      // webSecurity: false,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.webContents.on("did-frame-finish-load", () => {
    //TODO: get extensions working again
    // if (isDev) {
    //   const installExtensions = async () => {
    //     const installer = require("electron-devtools-installer");
    //     const extensions = ["REACT_DEVELOPER_TOOLS"];
    //     return Promise.all(
    //       extensions.map((name) => installer.default(installer[name]))
    //     ).catch(console.log);
    //   };
    //   // Open DevTools.
    //   installExtensions().then(() => mainWindow.webContents.openDevTools());
    // }
  });
  mainWindow.on("window-all-closed", () => app.quit());
}

if (!isDev) {
  //start app on os login
  app.setLoginItemSettings({
    openAtLogin: true,
  });
  //when update downloads restart and install
  //   autoUpdater.on("update-downloaded", (info) => {
  //TODO: notify that a new version has been installed and will start next reboot
  //   });
  //check do spaces for app updates
  //   autoUpdater.checkForUpdatesAndNotify();
}

app.whenReady().then(createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.once("before-quit", () => {
  mainWindow.removeAllListeners("close");
});
