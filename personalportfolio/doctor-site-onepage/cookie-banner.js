// 🍪 Simple Cookie Consent Banner
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  // Check if consent already given
  if (localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "flex";
  }

  // When user accepts
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
});
