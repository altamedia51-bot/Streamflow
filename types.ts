
export enum AppView {
  DASHBOARD = 'dashboard',
  VIDEO_LIBRARY = 'video-library',
  STREAM_CONTROL = 'stream-control',
  PLAYLIST = 'playlist',
  SCHEDULER = 'scheduler',
  LOGS = 'logs'
}

export interface Video {
  id: string;
  filename: string;
  size: number;
  duration: string;
  createdAt: string;
}

export interface StreamStatus {
  active: boolean;
  uptime: string;
  bitrate: string;
  currentVideo?: string;
  fps: number;
  outputs: string[];
}

export interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error';
  message: string;
}
