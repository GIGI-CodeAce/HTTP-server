import { getAll,getById,getByMake } from "./model.js"

export async function listGuitars(req,res){
    const guitars = await getAll()
    res.send(guitars)
}

export async function showguitars(req, res) {
    const param = req.params.id;
    const id = parseInt(param);

    if (id) {
        const guitar = await getById(id);
        if (!guitar) {
            res.status(404).send('Guitar not found');
        } else {
            res.send(guitar);
        }
    } else {
        const found = await getByMake(param);
        if (found.length === 0) {
            res.status(404).send('Guitar not found');
        } else {
            res.send(found);
        }
    }
}
