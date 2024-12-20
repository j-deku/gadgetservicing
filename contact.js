const close = document.querySelector(".closeForm");
window.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const form = document.getElementById("container");
  document.querySelector(".closeForm").addEventListener("click", function () {
    form.style.display = "none";
    overlay.style.display = "none";
  });
  form.style.display = "block";
});
document.getElementById("submit").addEventListener("submit", function () {
  alert("Details submitted successfully");
});
