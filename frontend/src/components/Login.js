import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      onLoginSuccess(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-8">
            <span className="text-spotify-green">Spotify</span>
          </h1>
          <h2 className="text-3xl font-bold text-white mb-2">Log in to Spotify</h2>
        </div>

        <div className="bg-spotify-black p-8 rounded-lg">
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-spotify-lightgray text-white rounded border border-gray-600 focus:border-spotify-green focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-spotify-lightgray text-white rounded border border-gray-600 focus:border-spotify-green focus:outline-none"
                placeholder="Password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-spotify-green text-black font-bold py-3 rounded-full hover:bg-green-400 transition duration-200 disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 mb-4">Don't have an account?</p>
            <button
              onClick={onSwitchToRegister}
              className="w-full border-2 border-gray-500 text-white font-bold py-3 rounded-full hover:border-white transition duration-200"
            >
              Sign up for Spotify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
