import { view } from './view.js'

export const showLogin = (req,res) =>{
    res.send(view('loginForm'))
}

export function auth(req,res){
    const {email, password} = req.body

    if(!email || !password){
        res.redirect('/login')
        return
    }
    if(email.toLowerCase() === 'admin@admin.com' && password === 'pass'){
        req.session.user = {
            email,
            isAuth: true
        }
        res.redirect('/guitars')
    }else{
        res.redirect('/login')
    }
}

export function logOut(req,res){
    req.session.destroy()
    res.redirect('/')
}

export function checkAuth(req,res,next){
    let isAuth = req.session.user && req.session.user.isAuth

    if(isAuth){
        next()
    }else{
        res.redirect('/login')
    }
  }
