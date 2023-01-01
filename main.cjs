const { app, BrowserWindow } = require('electron')
const fastify = require('fastify')({ logger: true })

const createWindow = () => {
    const win = new BrowserWindow({
        width: 834,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
        
    })
    
    win.loadURL('http://localhost:5173')
}

//inicio e encerramento da janela do app
app.whenReady().then(() => {
    createWindow()
    if( BrowserWindow.getAllWindows().length === 0 ) createWindow()
    console.log("--------- START ---------")
})

app.on("window-all-closed", () => {
    app.quit()
})


//server para receber informações do react
const start = async () => {
    try {
        await fastify.listen({ port: 8080 })
    } catch (e) {
        console.log("--------- CUSTOM ERROR ---------")
        console.log(e)
        process.exit(1)        
    }
}

//rotas WinBar
fastify.get('/close', async () => {
    app.quit()
    return { status: 200, msg: "closing application" }    
})

fastify.get('/minimize', async () => {
    BrowserWindow.getFocusedWindow().minimize()
    return { status: 200, msg: "minimizing application" }    
})


//START
start()