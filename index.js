const express = require('express');
var sass = require('node-sass');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Started Sucessfully');
});



app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
