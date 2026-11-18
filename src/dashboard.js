
// Dashboard Mobile Sidebar
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("-translate-x-full");
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener("click", (event) => {
    if (
        sidebar &&
        menuBtn &&
        window.innerWidth < 1024 &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.classList.add("-translate-x-full");
    }
});

// Logout demo
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {
            window.location.href = "login.html";
        }
    });
}
