// Verify Email
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//live email validation
document.querySelector("#email").addEventListener("input", (e) => {
  const email = e.target.value;
  const emailInput = e.target;
  const emailError = document.querySelector("#email-error");

  const root = document.documentElement;
  const errorColor = getComputedStyle(root).getPropertyValue("--error").trim();
  const validColor = getComputedStyle(root).getPropertyValue("--valid").trim();
  const errorBg = getComputedStyle(root).getPropertyValue("--error-bg").trim();
  const validBg = getComputedStyle(root).getPropertyValue("--valid-bg").trim();

  if (!isValidEmail(email)) {
    emailError.textContent = "Valid Email required!";
    emailError.style.color = `${errorColor}`;
    emailInput.style.backgroundColor = `${errorBg}`;
    root.style.setProperty("--custom-border", errorColor);
  } else {
    emailError.textContent = "Valid Email";
    emailError.style.color = `${validColor}`;
    emailInput.style.backgroundColor = `${validBg}`;

    root.style.setProperty("--custom-border", validColor);
  }
});

// Form submission
document.getElementById("form").addEventListener("submit", (e) => {
  let isValid = true;

  const emailInput = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");

  const newsletter = document.querySelector(".newsletter");
  const thank = document.querySelector(".thank");
  const confirm = document.querySelector(".confirmation");

  //clear previous error
  emailError.textContent = "";

  if (!emailInput.value.trim()) {
    emailError.textContent = "Email required!";
    emailError.style.color = "red";
    isValid = false;
  }
  if (!isValid) {
    e.preventDefault();
  } else {
    e.preventDefault();
    let email = emailInput.value.trim();
    confirm.innerHTML = `A confirmation email has been sent to
      <span class="confirm-email">${email}</span>. Please open it and click the button inside to
      confirm your subscription. `;

    newsletter.style.display = "none";
    thank.style.display = "flex";
  }
});
// Go back to form
document.querySelector("#dismiss").addEventListener("click", () => {
  location.reload();
});
