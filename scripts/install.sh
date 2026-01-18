
#!/bin/bash

echo "🚀 Initializing Streamflow Installation..."

# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install FFmpeg
sudo apt install -y ffmpeg

# Verify FFmpeg installation
ffmpeg -version

# Create project folders
mkdir -p storage/videos storage/logs

# Install NPM dependencies
cd server && npm install

echo "✅ Installation complete!"
echo "Run 'npm start' inside /server to begin."
