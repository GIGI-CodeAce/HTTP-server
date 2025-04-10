import { request, Router } from "express";
import {showLogin, auth} from './controller.js'

export const routes = new Router()

routes.get('/', showLogin)
routes.post('/', auth)