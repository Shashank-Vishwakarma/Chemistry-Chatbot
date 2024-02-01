import { app, BrowserWindow } from "electron";
import path from 'path'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
    });

    win.loadFile('index.html');
}

app.whenReady().then(()=>{
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
}).catch((error)=>{
    console.log("error : ", error)
})

app.on("window-all-closed", ()=>{
    if(process.platform !== 'darwin') app.quit();
})