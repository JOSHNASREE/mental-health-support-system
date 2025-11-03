// Example: Show a confirmation after booking
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your therapy session has been booked successfully!");
      form.reset();
    });
  }
});