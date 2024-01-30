
const express = require('express'); const app = express();
const port = 3000; // You can change this to any available port you prefer

app.get('/api/', (req, res) => {
    res.send('Hello from your Node.js app!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
