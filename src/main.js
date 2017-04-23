const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({ width: 800, height: 600, show: false });

	mainWindow.loadURL("http://localhost:8080/");

	//mainWindow.webContents.openDevTools();

	mainWindow.on("closed", () => {
		mainWindow = null;
	});

	mainWindow.on("ready-to-show", () => {
		mainWindow.show();
		mainWindow.focus();
	});
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
