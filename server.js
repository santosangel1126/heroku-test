const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.get('*', (req, res) => {
    res.send("yo")
})

app.listen(PORT, () => {
    console.log('living')
})