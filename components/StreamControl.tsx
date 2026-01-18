
import React, { useState } from 'react';

const StreamControl: React.FC = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [loopEnabled, setLoopEnabled] = useState(true);
  const [destinations, setDestinations] = useState([
    { id: '1', platform: 'YouTube', url: 'rtmp://a.rtmp.youtube.com/live2/xxxx-xxxx', active: true },
    { id: '2', platform: 'Twitch', url: 'rtmp://live.twitch.tv/app/live_xxxx', active: true },
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <i className="fas fa-sliders-h text-blue-500"></i>
            Broadcast Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Source Video</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white">
                  <option>Intro_Animation.mp4</option>
                  <option>Product_Demo_HD.mp4</option>
                  <option>Background_Loop.mp4</option>
                  <option>Playlist: Main Rotation</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setLoopEnabled(!loopEnabled)}
                  className={`flex-1 p-3 rounded-lg border flex items-center justify-center gap-2 transition-colors ${
                    loopEnabled ? 'bg-blue-600/20 border-blue-600 text-blue-400' : 'bg-gray-700 border-gray-600 text-gray-400'
                  }`}
                >
                  <i className="fas fa-redo"></i> Loop Video
                </button>
                <div className="flex-1 space-y-1">
                   <p className="text-[10px] text-gray-500 uppercase font-bold">Bitrate Cap</p>
                   <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-xs">
                     <option>2500 kbps (Balanced)</option>
                     <option>4500 kbps (High Quality)</option>
                     <option>6000 kbps (Ultra)</option>
                   </select>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Target Resolution</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white">
                  <option>1080p (1920x1080)</option>
                  <option>720p (1280x720)</option>
                  <option>Original Resolution</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Preset</label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white">
                  <option>veryfast (Low CPU)</option>
                  <option>faster (Balanced)</option>
                  <option>medium (High Quality)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button 
              onClick={() => setIsStreaming(!isStreaming)}
              className={`flex-1 py-4 rounded-xl font-black text-lg transition-all transform hover:scale-[1.01] ${
                isStreaming 
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/30' 
                  : 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/30'
              }`}
            >
              {isStreaming ? (
                <span className="flex items-center justify-center gap-3">
                  <i className="fas fa-stop-circle animate-pulse"></i> STOP BROADCAST
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <i className="fas fa-play-circle"></i> START BROADCAST
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">RTMP Targets</h3>
            <button className="p-1 hover:text-blue-500 transition-colors"><i className="fas fa-plus-circle"></i></button>
          </div>
          <div className="space-y-3">
            {destinations.map(dest => (
              <div key={dest.id} className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${isStreaming && dest.active ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    <span className="font-bold text-sm">{dest.platform}</span>
                  </div>
                  <input type="checkbox" checked={dest.active} onChange={() => {}} className="accent-blue-500" />
                </div>
                <div className="flex items-center gap-2 bg-black/40 p-2 rounded border border-gray-800">
                  <input 
                    type="password" 
                    readOnly 
                    value={dest.url} 
                    className="bg-transparent border-none text-xs w-full text-gray-500 outline-none" 
                  />
                  <button className="text-gray-400 hover:text-white"><i className="fas fa-copy text-xs"></i></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4">
           <p className="text-xs text-blue-400 flex items-start gap-2">
              <i className="fas fa-info-circle mt-0.5"></i>
              <span>FFmpeg is configured to use GPU acceleration if available. Ensure multiple streams do not exceed CPU limits.</span>
           </p>
        </div>
      </div>
    </div>
  );
};

export default StreamControl;
