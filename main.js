//load modules
const {app,BrowserWindow}=require('electron')

const path=require('path')
const url=require('url')

let win 

function crtWindow(){
    win=new BrowserWindow({width:800,height:600,frame:false})

    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true

    }))

    win.openDevTools()
}

app.on('ready',crtWindow)