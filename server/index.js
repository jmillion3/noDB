// Require and express functions go here
const express = require('express');
const ctrl = require('./controller.js');

const app = express();

app.use(express.json());
// Endpoints go here

app.get('/api/children', ctrl.getChildren);
app.post('/api/children', ctrl.addChild);
app.put('/api/children/:id', ctrl.addHours);
app.put('/api/children/:id', ctrl.subHours);
app.delete('/api/children/:id', ctrl.deleteChild);

const port = 4003;
app.listen(port, () => console.log(`Listening on port ${port}`));

// ! Add a reset css page in src folder