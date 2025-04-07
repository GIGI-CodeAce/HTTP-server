const views = {
    form(){
        return this._layout(` 
    <form method="post" action="/guitars">
    <div>
        Make: <input type="text" name="guitar_make" />
    </div>
    <div>
        Model: <input type="text" name="guitar_model" />
    </div>
    <div>
        <button type="submit">Save</button>
    </div>
    </form>`)
    },
    list({guitars, title}) {
        const liElements = guitars.map(({id, make, model}) => 
            `<li><a href="/guitars/${id}">${make} ${model}</a></li>`);

        return this._layout(`
            <h2>${title}</h2>
            <ul>
                ${liElements.join('')}
            </ul>
            <h4><a href="/guitars/create">Add a guitar</a></h4>
        `);
    },
    show(guitar){
        return this._layout(`
            <span>Guitar with the id of ${guitar.id}</span>
            <h2>${guitar.make} ${guitar.model}</h2>
        `);
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