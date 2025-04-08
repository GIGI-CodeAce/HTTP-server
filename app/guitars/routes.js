import { Router } from "express"
import { createGuitar,editGuitar,deleteGuitar,updateGuitar, listGuitars,showguitars, storeGuitars } from "./controller.js"

export const routes = new Router()


routes.get('/', listGuitars)
routes.post('/', storeGuitars)
routes.get('/create', createGuitar)
routes.get('/:id/edit', editGuitar)
routes.get('/:id/delete', deleteGuitar)
routes.get('/:id',showguitars)
routes.post('/:id', updateGuitar)