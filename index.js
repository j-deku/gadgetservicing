document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem || !localStorage.getItem("showAlert", "true")) {
    alert("You're viewing a servicing site");
    const confirmed = confirm("Do you want to proceed?");

    const welcome = document.getElementById("welcome");
    const overlay = document.querySelector(".overlay1");
    const closeWelcome = document.querySelector(".closeForm");
    closeWelcome.addEventListener("click", function () {
      overlay.style.display = "none";
      welcome.style.display = "none";
    });

    if (confirmed && welcome) {
      alert("Nice to meet you here! ☺");
      overlay.style.display = "block";
      welcome.style.display = "block";
    } else {
      alert("Closing the site...");
      window.close();
    }
  }
  sessionStorage.setItem("showAlert", "true");
  localStorage.setItem("showAlert", "true");
});

const menubar = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menubar.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
