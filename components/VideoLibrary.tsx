
import React, { useState } from 'react';

const VideoLibrary: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);

  const mockVideos = [
    { id: '1', name: 'Intro_Animation.mp4', size: '124MB', duration: '00:00:15', date: '2024-05-18' },
    { id: '2', name: 'Product_Demo_HD.mp4', size: '2.1GB', duration: '00:12:45', date: '2024-05-19' },
    { id: '3', name: 'Background_Loop.mp4', size: '450MB', duration: '00:05:00', date: '2024-05-20' },
    { id: '4', name: 'Music_Visualizer.mp4', size: '890MB', duration: '01:00:00', date: '2024-05-20' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-lg">Storage Manager</h3>
          <p className="text-gray-400 text-sm">Upload and manage your video assets for streaming.</p>
        </div>
        <div className="flex gap-3">
          <input 
            type="file" 
            id="video-upload" 
            className="hidden" 
            onChange={() => {
              setIsUploading(true);
              setTimeout(() => setIsUploading(false), 3000);
            }} 
          />
          <label 
            htmlFor="video-upload" 
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold cursor-pointer transition-colors flex items-center gap-2"
          >
            <i className="fas fa-plus"></i> Upload Video
          </label>
        </div>
      </div>

      {isUploading && (
        <div className="bg-gray-800 border border-blue-900/50 rounded-xl p-4 animate-pulse">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-blue-400">Uploading: cinematic_trailer.mp4...</span>
            <span className="text-sm text-blue-400">75%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-[75%]"></div>
          </div>
        </div>
      )}

      <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-900/50 text-gray-400 text-xs uppercase font-bold border-b border-gray-700">
              <th className="px-6 py-4">Filename</th>
              <th className="px-6 py-4">Size</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4">Uploaded</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {mockVideos.map(video => (
              <tr key={video.id} className="hover:bg-gray-700/30 transition-colors group">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-700 rounded flex items-center justify-center text-blue-400">
                    <i className="fas fa-video"></i>
                  </div>
                  <span className="font-medium text-gray-200">{video.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm">{video.size}</td>
                <td className="px-6 py-4 text-gray-400 text-sm font-mono">{video.duration}</td>
                <td className="px-6 py-4 text-gray-400 text-sm">{video.date}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 hover:bg-gray-600 rounded text-gray-400 hover:text-white transition-colors">
                    <i className="fas fa-play"></i>
                  </button>
                  <button className="p-2 hover:bg-gray-600 rounded text-gray-400 hover:text-white transition-colors">
                    <i className="fas fa-download"></i>
                  </button>
                  <button className="p-2 hover:bg-red-900/30 rounded text-gray-400 hover:text-red-500 transition-colors">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoLibrary;
