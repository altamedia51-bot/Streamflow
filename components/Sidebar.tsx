
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  activeView: AppView;
  setView: (view: AppView) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setView, onLogout }) => {
  const menuItems = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: 'fa-tachometer-alt' },
    { id: AppView.VIDEO_LIBRARY, label: 'Video Library', icon: 'fa-film' },
    { id: AppView.STREAM_CONTROL, label: 'Stream Control', icon: 'fa-broadcast-tower' },
    { id: AppView.PLAYLIST, label: 'Playlists', icon: 'fa-list-ul' },
    { id: AppView.SCHEDULER, label: 'Scheduler', icon: 'fa-clock' },
    { id: AppView.LOGS, label: 'System Logs', icon: 'fa-terminal' },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 hidden md:flex flex-col">
      <div className="p-6">
        <h2 className="text-xl font-black text-blue-500 flex items-center gap-2">
          <i className="fas fa-play-circle text-2xl"></i>
          STREAMFLOW
        </h2>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeView === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <i className={`fas ${item.icon} w-5`}></i>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800 space-y-4">
        <div className="px-4 py-3 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 uppercase font-bold mb-1">Server Usage</p>
          <div className="flex justify-between text-xs mb-1">
            <span>CPU</span>
            <span>24%</span>
          </div>
          <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-[24%]"></div>
          </div>
          <div className="flex justify-between text-xs mt-2 mb-1">
            <span>RAM</span>
            <span>1.2GB / 4GB</span>
          </div>
          <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full w-[30%]"></div>
          </div>
        </div>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-950/30 rounded-lg transition-colors text-sm font-medium"
        >
          <i className="fas fa-sign-out-alt w-5"></i>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
