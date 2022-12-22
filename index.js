const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Service Review Node Server Running');
});


app.listen(port, () => {
    console.log(`Service Review Not Server Running On Port ${port}`)
})