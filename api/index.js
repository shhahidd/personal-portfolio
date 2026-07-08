const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../db/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (!req.url.startsWith('/api') && (req.url.startsWith('/projects') || req.url.startsWith('/contact'))) {
    req.url = '/api' + req.url;
  }
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/projects', (req, res) => {
  db.all('SELECT * FROM projects', [], (err, rows) => {
    if (err) {
      console.error('Error fetching projects:', err.message);
      return res.status(500).json({ error: 'Database query error' });
    }
    const formattedProjects = rows.map(project => ({
      ...project,
      tags: project.tags ? project.tags.split(',') : []
    }));
    res.json({ projects: formattedProjects });
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const query = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
  db.run(query, [name, email, message], function(err) {
    if (err) {
      console.error('Error inserting message:', err.message);
      return res.status(500).json({ error: 'Failed to store message.' });
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been saved.',
      id: this.lastID
    });
  });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:${PORT}`);
  });
}

module.exports = app;
