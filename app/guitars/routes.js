import { Router } from "express"
import { listGuitars,showguitars } from "./controller.js"

export const routes = new Router()


routes.get('/', listGuitars)
routes.get('/:id',showguitars)