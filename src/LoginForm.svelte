<script>
    // Import the login function from api.js
    import { login } from './api.js';
    import { navigate } from 'svelte-routing'; // Import the navigate function
  
    // Variables to store form inputs, loading state, and error message
    let email = ''; // Store email input
    let password = ''; // Store password input
    let isLoading = false; // Track loading state
    let errorMessage = ''; // Store error message
    let user = null; // Variable to store user information
  
    // Function to handle form submission
    async function handleLogin(event) {
      event.preventDefault(); // Prevent default form submission
  
      try {
        isLoading = true; // Set loading state to true
        errorMessage = ''; // Clear any previous error message
  
        // Call the login function with email and password
        const userData = await login(email, password);
  
        // Store user data in the user variable
        user = userData;
  
        // Handle successful login (e.g., redirect to dashboard)
        console.log('User logged in:', userData);
        
        // Redirect the user to the dashboard page
        navigate('/dashboard');
      } catch (error) {
        // Handle login error
        errorMessage = error.message || 'An error occurred';
      } finally {
        isLoading = false; // Reset loading state
      }
    }
  </script>
  