const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send({ message: "Hello World"}))
app.use(express.json());

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));