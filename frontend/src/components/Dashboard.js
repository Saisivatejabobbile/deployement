import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen">
      <nav className="bg-spotify-black p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-spotify-green">Spotify</h1>
          <button
            onClick={onLogout}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Log Out
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user?.username}!
          </h2>
          <p className="text-white text-lg">{user?.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-spotify-lightgray p-6 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            <div className="text-5xl mb-4">🎵</div>
            <h3 className="text-white text-xl font-bold mb-2">Your Library</h3>
            <p className="text-gray-400">Access your saved music</p>
          </div>

          <div className="bg-spotify-lightgray p-6 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            <div className="text-5xl mb-4">🎧</div>
            <h3 className="text-white text-xl font-bold mb-2">Playlists</h3>
            <p className="text-gray-400">Create and manage playlists</p>
          </div>

          <div className="bg-spotify-lightgray p-6 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-white text-xl font-bold mb-2">Discover</h3>
            <p className="text-gray-400">Find new music</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
