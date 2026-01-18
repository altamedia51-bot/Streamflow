
const express = require('express');
const router = express.Router();
const streamController = require('../controllers/stream.controller');
const authMiddleware = require('../middleware/auth');

router.get('/status', authMiddleware, streamController.getStatus);
router.post('/start', authMiddleware, streamController.startStream);
router.post('/stop', authMiddleware, streamController.stopStream);

module.exports = router;
