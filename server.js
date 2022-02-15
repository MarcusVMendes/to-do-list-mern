const express = require('express');
const cors = require('cors');
require('dotenv').config();
const taskRouter = require('./server/routes/tasks');

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send({ message: 'Hello World' }));
app.use('/task', taskRouter);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
