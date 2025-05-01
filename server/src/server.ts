import { app } from "./app";
import http from "node:http"
import { setupWebSocket } from "./webSocket";

const PORT = 3333

const server =  http.createServer(app)

setupWebSocket(server)

server.listen(PORT, () => {
    console.log(`Server in PORT ${PORT} is running`)
})