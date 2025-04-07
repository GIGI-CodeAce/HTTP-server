let id = 1
function newId(){
    return id++
}

export const guitars = [
    {id: newId(), make: 'Fender', model: 'Strat'},
    {id: newId(), make: 'PRS', model: 'Starla'},
    {id: newId(), make: 'BMW', model: 'Les Paul'},
]

export function addGuitar(make,model){
    const guitar = {
        id: newId(), make: make, model: model
    }

    guitars.push(guitar)

    return Promise.resolve(guitar)
}

export function getAll(){
    return Promise.resolve(guitars)
}
export function getById(id){
    const guitar = guitars.find(g => g.id === id)

    return Promise.resolve(guitar)
}

export function getByMake(make){
    const found = guitars.filter(g => g.make.toLocaleLowerCase() === make.toLocaleLowerCase())

    return Promise.resolve(found)
}