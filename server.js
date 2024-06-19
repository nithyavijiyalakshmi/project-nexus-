const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let photos = [
    // Example photo objects, replace with actual photo data or fetch from an API
    { url: 'https://example.com/photo1.jpg', description: 'Product 1' },
    { url: 'https://example.com/photo2.jpg', description: 'Product 2' },
];

let contacts = [];

app.get('/api/photos', (req, res) => {
    res.json({ photos });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (name && email && message) {
        contacts.push({ name, email, message });
        res.json({ success: true });
    } else {
        res.status(400).json({ success: false, error: 'Invalid input' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
