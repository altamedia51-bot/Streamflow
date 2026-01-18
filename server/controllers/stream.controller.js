
const streamService = require('../services/stream.service');

exports.getStatus = (req, res) => {
  const status = streamService.status();
  res.json(status);
};

exports.startStream = async (req, res) => {
  const { videoId, destinations } = req.body;
  try {
    const result = await streamService.start(videoId, destinations);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.stopStream = (req, res) => {
  const result = streamService.stop();
  res.json(result);
};
