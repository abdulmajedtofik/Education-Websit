
// ==================================
// 1. SHOW / HIDE PASSWORD
// ==================================

document.querySelectorAll("[data-toggle-password]").forEach(button => {
  button.addEventListener("click", () => {
    const inputId = button.dataset.togglePassword;
    const passwordInput = document.getElementById(inputId);

    if (!passwordInput) return;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      button.textContent = "Hide";
    } else {
      passwordInput.type = "password";
      button.textContent = "Show";
    }
  });
});


// ==================================
// 2. LOGIN FORM
// ==================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");

    if (!email || !password) {
      message.textContent = "Please fill in all fields.";
      message.className = "text-sm text-center text-red-600";
      return;
    }

    message.textContent =
      "Login design is working! Connect PHP and MySQL to enable real login.";
    message.className = "text-sm text-center text-emerald-600";
  });
}


// ==================================
// 3. REGISTRATION FORM
// ==================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", event => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("registerMessage");

    if (!fullName || !email || !password || !confirmPassword) {
      message.textContent = "Please fill in all fields.";
      message.className = "text-sm text-center text-red-600";
      return;
    }

    if (password.length < 8) {
      message.textContent = "Password must contain at least 8 characters.";
      message.className = "text-sm text-center text-red-600";
      return;
    }

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      message.className = "text-sm text-center text-red-600";
      return;
    }

    message.textContent =
      "Registration form is working! Connect PHP and MySQL to create a real account.";
    message.className = "text-sm text-center text-emerald-600";
  });
}


// ==================================
// 4. FORGOT PASSWORD
// ==================================

const forgotPassword = document.getElementById("forgotPassword");

if (forgotPassword) {
  forgotPassword.addEventListener("click", event => {
    event.preventDefault();
    alert("Password recovery will be available after backend integration.");
  });
}
window.location.href = "dashboard.html";