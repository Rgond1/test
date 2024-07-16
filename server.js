const { exec } = require('child_process');

// Example path to script.bat
const scriptPath = '/var/task/script.bat';

exec(scriptPath, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing ${scriptPath}: ${error}`);
        // Handle error response
        return;
    }
    console.log(`Script output: ${stdout}`);
    // Handle successful execution response
});
