import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // TODO: Implement actual authentication
    // For now, we'll just navigate to the attendance page
    navigate('/attendance');

    // Uncomment the following code when ready to implement authentication
    /*
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.success) {
        navigate('/attendance');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
    */
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 text-2xl border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 text-2xl border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded text-2xl hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;