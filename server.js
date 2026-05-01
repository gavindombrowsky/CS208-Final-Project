const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware - MUST be at the top
app.use(express.json());
app.use(express.static('public'));

const DATA_FILE = path.join(__dirname, 'comments.json');

// Ensure the file exists right when the server starts
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]');
}

// GET: Load comments
app.get('/api/comments', (req, res) => {
    try {
        const content = fs.readFileSync(DATA_FILE, 'utf8');
        res.json(JSON.parse(content || '[]'));
    } catch (err) {
        console.error("Error reading file:", err);
        res.status(500).send("Error reading comments");
    }
});

// POST: Save a comment
app.post('/api/comments', (req, res) => {
    console.log("Received POST request body:", req.body); // Check your terminal for this!

    try {
        // 1. Read current data
        const content = fs.readFileSync(DATA_FILE, 'utf8');
        const comments = JSON.parse(content || '[]');

        // 2. Add new data
        const newEntry = {
            username: req.body.username || "Anonymous",
            text: req.body.text || "",
            date: new Date()
        };

        comments.push(newEntry);

        // 3. Write back to file
        fs.writeFileSync(DATA_FILE, JSON.stringify(comments, null, 2));
        
        console.log("Successfully saved comment!");
        res.status(201).json(newEntry);
    } catch (err) {
        console.error("Critical Server Error:", err);
        res.status(500).send("Failed to save comment");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}/comment.html`);
});