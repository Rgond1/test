const { exec } = require('child_process');
const path = require('path');

module.exports = (req, res) => {
    const scriptPath = path.join(__dirname, '..', 'script.bat');
    exec(`"${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).send(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.status(200).send(`stdout: ${stdout}`);
    });
};
