
import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VideoLibrary from './components/VideoLibrary';
import StreamControl from './components/StreamControl';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // For preview purposes defaults to true

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-500 mb-2">STREAMFLOW</h1>
            <p className="text-gray-400">Sign in to your streaming server</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white transition"
                placeholder="admin"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-white transition"
                placeholder="••••••••"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
            >
              Login to Console
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar activeView={currentView} setView={setCurrentView} onLogout={() => setIsLoggedIn(false)} />
      
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold capitalize text-white">
                {currentView.replace('-', ' ')}
              </h1>
              <p className="text-gray-400 text-sm">System Status: <span className="text-green-500">Online</span></p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-sm transition-colors">
                <i className="fas fa-sync-alt mr-2"></i> Refresh
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors">
                <i className="fas fa-stop-circle mr-2"></i> Emergency Stop
              </button>
            </div>
          </header>

          {currentView === AppView.DASHBOARD && <Dashboard />}
          {currentView === AppView.VIDEO_LIBRARY && <VideoLibrary />}
          {currentView === AppView.STREAM_CONTROL && <StreamControl />}
          {currentView === AppView.PLAYLIST && (
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <i className="fas fa-list text-6xl text-gray-600 mb-4"></i>
              <h2 className="text-xl font-bold mb-2">Playlist Management</h2>
              <p className="text-gray-400">Create sequences of videos to stream in order.</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold">Create First Playlist</button>
            </div>
          )}
          {currentView === AppView.SCHEDULER && (
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <i className="fas fa-calendar-alt text-6xl text-gray-600 mb-4"></i>
              <h2 className="text-xl font-bold mb-2">Stream Scheduler</h2>
              <p className="text-gray-400">Plan your broadcasts for the future.</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold">Add Schedule</button>
            </div>
          )}
          {currentView === AppView.LOGS && (
            <div className="bg-black border border-gray-800 rounded-lg p-4 font-mono text-sm h-[600px] overflow-y-auto">
              <div className="text-blue-400 mb-1">[2024-05-20 14:00:01] INFO: System initialized.</div>
              <div className="text-gray-500 mb-1">[2024-05-20 14:05:22] DEBUG: Checking video storage integrity...</div>
              <div className="text-green-400 mb-1">[2024-05-20 14:10:45] SUCCESS: Stream output established to YouTube.</div>
              <div className="text-green-400 mb-1">[2024-05-20 14:10:46] SUCCESS: Stream output established to Twitch.</div>
              <div className="text-yellow-400 mb-1">[2024-05-20 14:15:30] WARN: High CPU usage detected (82%).</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
