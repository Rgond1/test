const express = require('express');
const path = require('path');
const runScript = require('./api/run-script');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to run the script
app.get('/api/run-script', runScript);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
