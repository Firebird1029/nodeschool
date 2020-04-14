const electron = require("electron")

electron.app.on("ready", () => {
	// https://stackoverflow.com/questions/44391448/electron-require-is-not-defined
	const mainWindow = new electron.BrowserWindow({width: 600, height: 800, webPreferences: {nodeIntegration: true}})
	mainWindow.loadURL("file://" + __dirname + "/index.html")
})
