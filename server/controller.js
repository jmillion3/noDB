// Data structure/dummy data goes here
const children = [{
    id: 0,
    name: 'Quin',
    day: 'Sunday',
    hours: 0
}]

let id = 1;

// Handler methods  go here

module.exports = {
    getChildren: (req, res) => {
        res.status(200).send(children);
    },
    addChild: (req, res) => {
        const {name, day, hours} = req.body;
        const newChild = {id, name, day, hours};
        children.push(newChild);
        id++;
        res.status(200).send(children);
    },
    updateChild: (req, res) => {
        const {hours} = req.body;
        const index = children.findIndex(child => child.id === +req.params.id);
        children[index].hours = hours
        res.status(200).send(children)
    },
    deleteChild: (req, res) => {
        const index = children.findIndex(child => child.id === +req.params.id);
        children.splice(index, 1);
        res.status(200).send(children)
    }
}