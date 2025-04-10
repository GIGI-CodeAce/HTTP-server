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
         //
         console.log('what');
         
        res.redirect('/guitars')
    }else{
        console.log('what');
        res.redirect('/login')
    }
}