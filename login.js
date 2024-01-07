// In a real-world scenario, you would use a more secure authentication mechanism.
// This example uses basic username and password check.

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation (you should perform proper validation and authentication)
    if (username === 'user' && password === 'password') {
  
        // Redirect to the home page or perform other actions
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password.');
    }
}
function signup() {
        window.location.href = 'createaccount.html';
}

function logout() {
    // In a real-world scenario, you would perform proper logout actions.
    // For this simple example, we'll just redirect to the login page.
    window.location.href = 'home.html';
}
