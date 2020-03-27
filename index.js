const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('.'));

app.listen(port, () => console.log(`App listening on port ${port}!`));