const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to run the script
app.get('/api/run-script', (req, res) => {
    // Path to script.sh
    const scriptPath = path.join(__dirname, 'script.sh'); // Adjust the path as necessary

    // Execute the script
    exec(`sh ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script.sh: ${error}`);
            res.status(500).json({ error: `Error executing script.sh` });
            return;
        }
        console.log(`Script output: ${stdout}`);
        res.status(200).json({ message: 'Script executed successfully', output: stdout });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
