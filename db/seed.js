const db = require('./connection');

db.serialize(() => {
  console.log('Starting database seeding...');

  db.run(`DROP TABLE IF EXISTS projects`);
  db.run(`DROP TABLE IF EXISTS messages`);

  db.run(`
    CREATE TABLE projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      image_url TEXT,
      github_link TEXT,
      live_link TEXT,
      tags TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Error creating projects table:', err.message);
    } else {
      console.log('Projects table created successfully.');
    }
  });

  db.run(`
    CREATE TABLE messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating messages table:', err.message);
    } else {
      console.log('Messages table created successfully.');
    }
  });

  const initialProjects = [
    {
      title: 'ERP API Integration Gateway',
      description: 'A RESTful integration gateway simulating data sync of financial journal entries from SAP S/4HANA to a FinSight analytics platform. Features OData schema parsing, Pydantic validation, local logging, and compliance CSV streaming.',
      category: 'Backend',
      image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      github_link: 'https://github.com/shhahidd/ERP_API_Integration',
      live_link: '#',
      tags: 'FastAPI,SQLite,Python,OData'
    },
    {
      title: 'BiteRite Smart Nutrition',
      description: 'A web-based health and nutrition dashboard developed during a college Hackathon. Helps users track calories, meal schedules, water intake, fasting times, sleep cycles, and daily steps.',
      category: 'Frontend',
      image_url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
      github_link: 'https://github.com/shhahidd/BiteRite',
      live_link: '#',
      tags: 'HTML,CSS,JavaScript'
    },
    {
      title: 'Vehicle Recognition System',
      description: 'An intelligent vehicle classification and number plate analyzer built for an academic BCA project. Automates plate detection, text extraction with Tesseract.js OCR, RTO lookups, and vehicle attribute classification.',
      category: 'Fullstack',
      image_url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      github_link: 'https://github.com/shhahidd/Vehicle-Recognition-System',
      live_link: '#',
      tags: 'JavaScript,Computer Vision,Tesseract.js,OCR'
    },
    {
      title: 'Attendance Calculator',
      description: 'A responsive web application to track class attendance. Dynamically computes current attendance percentages based on total vs. attended classes and helps students determine how many sessions they can safely miss.',
      category: 'Frontend',
      image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
      github_link: 'https://github.com/shhahidd/AttendanceCalculator',
      live_link: '#',
      tags: 'HTML,CSS,JavaScript'
    },
    {
      title: 'ParfumPasCher',
      description: 'A structured and user-friendly perfume catalog website developed as an academic assignment for Web Content Management, illustrating layout design and hierarchy.',
      category: 'Frontend',
      image_url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
      github_link: 'https://github.com/shhahidd/ParfumPasCher',
      live_link: '#',
      tags: 'HTML,CSS'
    }
  ];

  const stmt = db.prepare(`
    INSERT INTO projects (title, description, category, image_url, github_link, live_link, tags)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  initialProjects.forEach((project) => {
    stmt.run(
      project.title,
      project.description,
      project.category,
      project.image_url,
      project.github_link,
      project.live_link,
      project.tags,
      (err) => {
        if (err) {
          console.error(`Error seeding project "${project.title}":`, err.message);
        } else {
          console.log(`Seeded project: ${project.title}`);
        }
      }
    );
  });

  stmt.finalize(() => {
    console.log('Database seeding completed successfully.');
    db.close((err) => {
      if (err) {
        console.error('Error closing database connection:', err.message);
      } else {
        console.log('Database connection closed.');
      }
    });
  });
});
