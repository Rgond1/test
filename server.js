const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to run the script
app.get('/api/run-script', (req, res) => {
    // Determine script file based on environment
    const scriptFile = process.platform === 'win32' ? 'script.bat' : './script.sh';

    // Execute the script
    exec(scriptFile, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing ${scriptFile}: ${error}`);
            res.status(500).json({ error: `Error executing ${scriptFile}` });
            return;
        }
        console.log(`Script output: ${stdout}`);
        res.status(200).json({ message: 'Script executed successfully', output: stdout });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
