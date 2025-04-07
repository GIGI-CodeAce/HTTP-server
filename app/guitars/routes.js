import { Router } from "express"
import { createGuitar, listGuitars,showguitars, storeGuitars } from "./controller.js"

export const routes = new Router()


routes.get('/', listGuitars)
routes.post('/', storeGuitars)
routes.get('/create', createGuitar)
routes.get('/:id',showguitars)
