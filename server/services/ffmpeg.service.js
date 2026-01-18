
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class FFmpegService {
  constructor() {
    this.process = null;
    this.startTime = null;
  }

  async startStream(config) {
    if (this.process) {
      throw new Error('A stream is already running');
    }

    const { videoPath, destinations, loop, bitrate, resolution, fps } = config;

    // FFmpeg arguments
    let args = [];

    // Loop logic
    if (loop) {
      args.push('-stream_loop', '-1');
    }

    // Input
    args.push('-re', '-i', videoPath);

    // Video encoding
    args.push(
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-b:v', bitrate || '2500k',
      '-maxrate', bitrate || '2500k',
      '-bufsize', '5000k',
      '-pix_fmt', 'yuv420p',
      '-g', (fps * 2).toString(),
      '-s', resolution || '1920x1080',
      '-r', fps.toString()
    );

    // Audio encoding
    args.push('-c:a', 'aac', '-b:a', '128k', '-ar', '44100');

    // Outputs
    // For multiple RTMP outputs, we use the tee muxer or repeat -f flv
    // Using simple -f flv for each destination:
    destinations.forEach(url => {
      args.push('-f', 'flv', url);
    });

    console.log('Spawning FFmpeg with args:', args.join(' '));

    this.process = spawn('ffmpeg', args);
    this.startTime = Date.now();

    this.process.stdout.on('data', (data) => {
      // Optional logging to file
    });

    this.process.stderr.on('data', (data) => {
      // FFmpeg outputs progress to stderr
      // console.log(`FFmpeg log: ${data}`);
    });

    this.process.on('close', (code) => {
      console.log(`FFmpeg process exited with code ${code}`);
      this.process = null;
      this.startTime = null;
    });

    return true;
  }

  stopStream() {
    if (this.process) {
      this.process.kill('SIGKILL');
      this.process = null;
      this.startTime = null;
      return true;
    }
    return false;
  }

  getStatus() {
    return {
      active: !!this.process,
      uptime: this.startTime ? Math.floor((Date.now() - this.startTime) / 1000) : 0,
    };
  }
}

module.exports = new FFmpegService();
