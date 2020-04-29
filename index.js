const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
app.use('/', express.static(path.join(__dirname, 'public')));

// routing lesson  



app.listen(port, () => console.log(`The server is running at port ${port}`))