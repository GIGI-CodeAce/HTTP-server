import { addGuitar,getAll,getById,getByMake, guitars } from "./model.js"
import { view } from "./view.js";

export async function createGuitar(req,res){
    res.send(view('form'))
}

export async function listGuitars(req,res){
    const guitars = await getAll()
    const html = view('list', { guitars, title: 'My Guitars' });
    res.send(html)
}

export async function showguitars(req, res) {
    const param = req.params.id;
    const id = parseInt(param);

    if (id) {
        const guitar = await getById(id);
        if (!guitar) {
            res.status(404).send('Guitar not found');
        } else {
            res.send(view('show', guitar))
        }
    } else {
        const found = await getByMake(param);
        if (found.length === 0) {
            res.status(404).send('Guitar not found');
        } else {
            res.send(view('list', {guitars: found, title: `Guitars made by ${found[0].make}`}));
        }
    }
}

export async function storeGuitars(req, res) {
    const { guitar_make, guitar_model } = req.body;

    const make = guitar_make?.trim();
    const model = guitar_model?.trim();

    if (make && model) {
        await addGuitar(make, model);
        res.redirect('/guitars');
    } else {
        res.redirect('/guitars/create');
    }
}
