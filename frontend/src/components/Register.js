import React, { useState } from 'react';
import axios from 'axios';

function Register({ onRegisterSuccess, onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/register`, {
        email,
        password,
        username
      });

      localStorage.setItem('token', response.data.token);
      onRegisterSuccess(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
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
          <h2 className="text-3xl font-bold text-white mb-2">Sign up for free</h2>
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
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-spotify-lightgray text-white rounded border border-gray-600 focus:border-spotify-green focus:outline-none"
                placeholder="Username"
                required
              />
            </div>

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
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-spotify-green hover:underline font-semibold"
              >
                Log in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
