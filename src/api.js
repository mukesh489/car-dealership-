// api.js

const API_BASE_URL = 'http://localhost:3000'; // Change this URL to match your backend server URL

export async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
}
