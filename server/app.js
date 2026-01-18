
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const streamRoutes = require('./routes/stream.routes');
const videoRoutes = require('./routes/video.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure storage directories exist
const dirs = ['storage/videos', 'storage/logs'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static storage for video access
app.use('/storage', express.static(path.join(__dirname, 'storage')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/stream', streamRoutes);
app.use('/api/videos', videoRoutes);

// Database initialization
const db = require('./db/database');
db.init();

app.listen(PORT, () => {
  console.log(`Streamflow Server running on http://localhost:${PORT}`);
});
