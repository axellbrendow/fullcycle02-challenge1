const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Maratona Full Cycle 2.0'));

app.listen(3000, () => {
    console.info('Server running on 3000');
});
