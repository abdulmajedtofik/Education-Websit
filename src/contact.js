
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const status = document.getElementById("contactStatus");

    if (!name || !email || !subject || !message) {
      status.textContent = "Please complete all fields.";
      status.className = "text-center text-sm text-red-600";
      return;
    }

    status.textContent =
      "Your form is working! Email delivery will be added with PHP backend.";
    status.className = "text-center text-sm text-emerald-600";

    contactForm.reset();
  });
}
