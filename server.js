const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, 'db.json');

app.get('/products', (req, res) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(data);
    res.json(products);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});