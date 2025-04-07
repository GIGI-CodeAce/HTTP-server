import { getAll,getById,getByMake, guitars } from "./model.js"
import { view } from "./view.js";

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
