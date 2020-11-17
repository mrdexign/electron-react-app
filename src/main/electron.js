const {app, BrowserWindow} = require("electron");

let mainWin;

const createWin = () => {
	mainWin = new BrowserWindow({
		width: 1000, height: 700,
		webPreferences: {nodeIntegration: true},
		show: false,
		frame:false
	});
	mainWin.loadURL('http://localhost:3000').then(() => console.log("mainWin Loaded"));
	mainWin.once('ready-to-show', mainWin.show);
	mainWin.on('closed', () => mainWin = null);
};

app.whenReady().then(createWin);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});