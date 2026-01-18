
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stats Cards */}
      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-blue-600/20 rounded-lg text-blue-500">
            <i className="fas fa-signal text-xl"></i>
          </div>
          <h3 className="text-gray-400 font-medium">Live Status</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-white">Streaming</p>
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-purple-600/20 rounded-lg text-purple-500">
            <i className="fas fa-hdd text-xl"></i>
          </div>
          <h3 className="text-gray-400 font-medium">Storage</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-white">42 GB</p>
          <span className="text-xs text-gray-500">of 100 GB</span>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-orange-600/20 rounded-lg text-orange-500">
            <i className="fas fa-clock text-xl"></i>
          </div>
          <h3 className="text-gray-400 font-medium">Uptime</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-white">12:45:01</p>
          <span className="text-xs text-gray-500">HH:MM:SS</span>
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 bg-green-600/20 rounded-lg text-green-500">
            <i className="fas fa-eye text-xl"></i>
          </div>
          <h3 className="text-gray-400 font-medium">Destinations</h3>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-white">3 Active</p>
          <span className="text-xs text-gray-500">YT, TW, FB</span>
        </div>
      </div>

      {/* Main Content Areas */}
      <div className="md:col-span-2 lg:col-span-3 space-y-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-gray-700 bg-gray-800/50 flex justify-between items-center">
            <h3 className="font-bold">Active Broadcast Stream</h3>
            <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">Preview (Low Latency)</span>
          </div>
          <div className="aspect-video bg-black flex items-center justify-center relative group">
             {/* Placeholder for video preview */}
             <div className="text-gray-700 text-center">
                <i className="fas fa-play text-4xl mb-2 opacity-20"></i>
                <p className="text-xs">Live Stream Preview Unavailable</p>
             </div>
             <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                <div className="bg-black/60 px-3 py-1 rounded text-xs font-mono">1080p @ 60fps | 4500 kbps</div>
                <div className="bg-red-600 px-3 py-1 rounded text-xs font-bold animate-pulse">LIVE</div>
             </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 space-y-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-6">
          <h3 className="font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center gap-3 w-full p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-left group">
              <i className="fas fa-upload text-blue-400 group-hover:scale-110 transition-transform"></i>
              <span>Upload Video</span>
            </button>
            <button className="flex items-center gap-3 w-full p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-left group">
              <i className="fas fa-layer-group text-purple-400 group-hover:scale-110 transition-transform"></i>
              <span>New Playlist</span>
            </button>
            <button className="flex items-center gap-3 w-full p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-left group">
              <i className="fas fa-cog text-gray-400 group-hover:scale-110 transition-transform"></i>
              <span>Stream Settings</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-6">
          <h3 className="font-bold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                <div>
                  <p className="text-gray-200">New video upload: <span className="text-blue-400">promo_final.mp4</span></p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
