const views = {
    form(guitar){
        let action = '/guitars',
        make = '', model = ''

        if(guitar){
            action = `/guitars/${guitar.id}`
            make = guitar.make
            model = guitar.model
        }

        return this._layout(` 
    <form method="post" action="${action}">
    <div>
        Make: <input type="text" name="guitar_make" value="${make}"/>
    </div>
    <div>
        Model: <input type="text" name="guitar_model" value="${model}" />
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
            <div class="redirectShortcut">
                <h4><a href="/guitars">Guitars list</a></h4>
                <h4><a href="/guitars/${guitar.id}/edit">Edit guitar</a></h4>
            </div>
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