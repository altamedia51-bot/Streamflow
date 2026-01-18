
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, 'streamflow.db');
const db = new sqlite3.Database(dbPath);

const init = () => {
  const schema = fs.readFileSync(path.resolve(__dirname, 'schema.sql'), 'utf8');
  db.exec(schema, (err) => {
    if (err) {
      console.error('Database Init Error:', err.message);
    } else {
      console.log('Database Schema Initialized');
    }
  });
};

module.exports = {
  db,
  init
};
