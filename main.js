const { app, BrowserWindow } = require('electron');
const path = require('path');

let createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 500,
        center: true,
        resizable: false,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, path.sep, path.sep, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        }
    });
    win.setMenu(null);
    win.loadURL(path.join('file:\\', __dirname, path.sep, 'index.html'));
    win.once('ready-to-show', () => {
        win.show();
        win.webContents.openDevTools();
    });
    win.on('closed', () => {
        win = null;
    });
};
app.on('ready', createWindow);