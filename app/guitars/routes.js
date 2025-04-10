import { Router } from "express"
import { createGuitar,editGuitar,deleteGuitar,updateGuitar, listGuitars,showguitars, storeGuitars } from "./controller.js"

export const routes = new Router()

function checkAuth(req,res,next){
    let isAuth = false

    if(isAuth){
        next()
    }else{
        res.redirect('/login')
    }
  }

routes.get('/',checkAuth, listGuitars)
routes.post('/',checkAuth, storeGuitars)
routes.get('/create',checkAuth, createGuitar)
routes.get('/:id/edit',checkAuth, editGuitar)
routes.get('/:id/delete',checkAuth, deleteGuitar)
routes.get('/:id',checkAuth,showguitars)
routes.post('/:id',checkAuth, updateGuitar)