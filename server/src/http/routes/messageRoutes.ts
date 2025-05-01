
import { Router } from "express"
import * as messageController from "./messageRoutesConfig/messageRoutesConfig"

const messageRoutes = Router()

messageRoutes.post("/message")
