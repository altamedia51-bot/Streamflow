
const ffmpeg = require('./ffmpeg.service');
const { db } = require('../db/database');
const path = require('path');

class StreamService {
  async start(videoId, destinationIds) {
    return new Promise((resolve, reject) => {
      // 1. Get Video details
      db.get('SELECT * FROM videos WHERE id = ?', [videoId], (err, video) => {
        if (err || !video) return reject('Video not found');

        // 2. Get active destinations
        db.all(`SELECT rtmp_url FROM destinations WHERE id IN (${destinationIds.join(',')}) AND is_active = 1`, (err, rows) => {
          if (err || rows.length === 0) return reject('No active destinations found');

          const urls = rows.map(r => r.rtmp_url);

          // 3. Get stream config
          db.get('SELECT * FROM stream_config WHERE id = 1', (err, config) => {
            const streamConfig = {
              videoPath: path.resolve(__dirname, '..', video.filepath),
              destinations: urls,
              loop: !!config.loop_enabled,
              bitrate: config.bitrate,
              resolution: config.resolution,
              fps: config.fps
            };

            try {
              ffmpeg.startStream(streamConfig);
              resolve({ success: true, message: 'Stream started' });
            } catch (e) {
              reject(e.message);
            }
          });
        });
      });
    });
  }

  stop() {
    const halted = ffmpeg.stopStream();
    return { success: halted, message: halted ? 'Stream stopped' : 'No stream was running' };
  }

  status() {
    return ffmpeg.getStatus();
  }
}

module.exports = new StreamService();
