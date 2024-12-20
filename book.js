document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gadget = document.getElementById("gadget").value;
    const issue = document.getElementById("issue").value;

    if (name && email && phone && gadget && issue) {
      // Simulate form submission
      setTimeout(() => {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("bookingForm").reset();
      }, 500);
      alert("Thank you! your booking had been submitted");
    } else {
      alert("Please fill out all fields.");
    }
  });
