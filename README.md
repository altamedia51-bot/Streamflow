
# Streamflow VPS Panel

A professional self-hosted live streaming panel for Ubuntu VPS.

## Features
- **Live Broadcasting**: Stream MP4 files to multiple RTMP destinations (YouTube, Twitch, FB).
- **High Performance**: Direct FFmpeg integration with multi-destination support.
- **Persistent Storage**: Upload and manage video assets.
- **Loop Support**: Continuous 24/7 broadcasting.
- **Admin Panel**: Intuitive React-based dashboard.

## Quick Start (Ubuntu VPS)
1. Clone the repository.
2. Run `chmod +x scripts/install.sh && ./scripts/install.sh`.
3. Configure `.env` in the `server` directory.
4. Start the backend: `cd server && npm start`.
5. For the frontend, open `index.html` (in development) or serve the root directory.

## Default Credentials
- **Username**: admin
- **Password**: admin123 (Change this in the database/schema)

## Tech Stack
- **Frontend**: React 18, Tailwind CSS, TypeScript.
- **Backend**: Node.js, Express.js, SQLite3.
- **Media Engine**: FFmpeg.
