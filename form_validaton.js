document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("bookingForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const consent = document.getElementById("consent").checked;
    const patientType = document.querySelector('input[name="patientType"]:checked');

    if (name === "") {
      showMessage("Please enter your full name", false);
      return;
    }

    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address", false);
      return;
    }

    if (phone.length < 8) {
      showMessage("Please enter a valid phone number", false);
      return;
    }

    if (service === "") {
      showMessage("Please select a service", false);
      return;
    }

    if (!patientType) {
      showMessage("Please select patient type", false);
      return;
    }

    if (date === "") {
      showMessage("Please select a preferred date", false);
      return;
    }

    if (!consent) {
      showMessage("You must agree to be contacted", false);
      return;
    }

    showMessage("Booking request submitted successfully!", true);
    form.reset();
  });

  function validateEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }

  function showMessage(text, success) {
    message.textContent = text;
    message.style.color = success ? "green" : "red";
    message.style.marginTop = "10px";
    message.style.fontWeight = "bold";
  }

});
