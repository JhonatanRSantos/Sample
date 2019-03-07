const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url')

let createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 500,
        center: true,
        resizable: false,
        show: false
    });
    win.setMenu(null);
    const mainUrl = url.format({ // https://electronjs.org/docs/api/browser-window#winloadurlurl-options
        protocol: 'file',
        slashes: true,
        pathname: path.join(__dirname, 'index.html')
      })
    win.loadURL(mainUrl);
    win.once('ready-to-show', () => {
        win.show();
        win.webContents.openDevTools();
    });
    win.on('closed', () => {
        win = null;
    });
};
app.on('ready', createWindow);