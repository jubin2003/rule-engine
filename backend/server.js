// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { evaluateRule } = require('./rule'); // Ensure this function is correctly implemented

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/evaluate', (req, res) => {
    const { ruleString, data } = req.body;

    // Check if ruleString and data are provided
    if (!ruleString || !data) {
        return res.status(400).json({ error: 'Both ruleString and data are required.' });
    }

    try {
        const result = evaluateRule(ruleString, data); // Adjust this based on your implementation
        res.json({ result }); // Send the result back
    } catch (error) {
        console.error('Error evaluating rule:', error);
        res.status(400).json({ error: error.message }); // Send error message as JSON
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
