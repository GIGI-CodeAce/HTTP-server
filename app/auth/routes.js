import { request, Router } from "express";
import {showLogin,logOut, auth} from './controller.js'

export const routes = new Router()

routes.get('/login', showLogin)
routes.post('/login', auth)
routes.get('/logout', logOut)