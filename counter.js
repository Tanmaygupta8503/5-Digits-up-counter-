const digitContainers = document.querySelectorAll(".digit-container .digit");
const form = document.querySelector("form");
const input = document.querySelector("input");
const submitButton = document.querySelector("button[type='submit']");

let intervalId;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reset counter
  digitContainers.forEach(digitContainer => digitContainer.classList.remove("active"));
  
  // Get input value
  const maxCount = parseInt(input.value);
  
  // Start counter
  let count = 1;
  clearInterval(intervalId);
  intervalId = setInterval(function () {
    digitContainers.forEach(function (digitContainer, index) {
      const digitValue = Math.floor(count / Math.pow(10, 4 - index)) % 10;
      digitContainer.textContent = digitValue;
      digitContainer.classList.add("active");
    });
    count++;
    if (count > maxCount) {
      clearInterval(intervalId);
    }
  }, 1000);
});

submitButton.addEventListener("click", function() {
  input.focus();
});
