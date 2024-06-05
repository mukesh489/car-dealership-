function handleLogout() {
    localStorage.removeItem('token'); // Clear user authentication data
    // You can add more code here to clear other user data if needed
    // Then, redirect the user to the login page
    window.location.href = '/login'; // Redirect to the login page
  }
  