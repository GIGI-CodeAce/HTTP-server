import express from 'express'
import { routes as guitarRoutes } from './guitars/routes.js';
const app = express();
const port = 3000

app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))

app.use('/guitars', guitarRoutes)

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
         <link rel="stylesheet" href="/assets/css/style.css"/>
    </head>
    <body>
      <h1>Welcome to the Guitar App</h1>
      <p><a href="/guitars">Go to Guitar List</a></p>
    </body>
    </html>
  `);
});


app.get('/sum/:a/:b', (req,res)=>{
  res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`)
})

export function startServer(){
  app.listen(3000, () => {
    console.log(`🟩 Server is running on port ${port}`);
  });
  
}