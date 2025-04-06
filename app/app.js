import express from 'express'
import { routes as guitarRoutes } from './guitars/routes.js';
const app = express();
const port = 3000

app.use('/guitars', guitarRoutes)

app.get('/', (req,res)=>{
    res.end("Home Page..")
})

app.get('/sum/:a/:b', (req,res)=>{
  res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`)
})

export function startServer(){
  app.listen(3000, () => {
    console.log(`🟩 Server is running on port ${port}`);
  });
  
}