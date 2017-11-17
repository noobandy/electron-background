'use strict'

const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let mainWindow 
let backgroundWindow 
let mainUrl = url.format({
    protocol: 'file',
    slashes: true,
    pathname: path.join(__dirname, 'index.html')
  })

let backgroundUrl = url.format({
    protocol: 'file',
    slashes: true,
    pathname: path.join(__dirname, 'background.html')
  })  

app.on('ready', function() {
    console.log('app ready')
    createMainWindow()
    createBackgroundWindow()
    mainWindow.loadURL('https://github.com/electron/electron-quick-start')
    backgroundWindow.loadURL(backgroundUrl)

    // Open the DevTools.
     mainWindow.webContents.openDevTools()
  
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createMainWindow()
      createBackgroundWindow();
    }
  })

function createMainWindow() {
    mainWindow =  new BrowserWindow({
        width: 800,
        height: 800
    })
}


function createBackgroundWindow() {
    backgroundWindow = new BrowserWindow({
        width: 800,
        height: 800,
        show: false
    })
}