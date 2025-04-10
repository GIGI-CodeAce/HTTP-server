 
 const views = {
    loginForm(){
        return this._layout(` 
            <h2>Login first</h2>
    <form method="post" action="/login">
    <div>
        Email: <input type="text" name="email"/>
    </div>
    <div>
        Password: <input type="password" name="password"/>
    </div>
    <div>
        <button type="submit">Sign in</button>
    </div>
    </form>`)
    },
    _layout(content){
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.css"/>
    <title>Guitar List</title>
        </head>
        <body>
            ${content}
        </body>
        </html>`;
        }
    }
    

export const view = (name,data)=> views[name](data)