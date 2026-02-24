//Export package
const sqlite3 = require('sqlite3').verbose();

// Create/connect to database file
const db = new sqlite3.Database('./database/college-courses.db');
console.log('Connected to SQLite database');

// Create courses table
db.run(`
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courseCode TEXT,
    title TEXT,
    credits INTEGER,
    description TEXT,
    semester TEXT
  )
`, () => {
  console.log('Courses table created');
  db.close();
});
