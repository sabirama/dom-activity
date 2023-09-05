const singUpBtn = document.getElementById("sign-up-btn");
singUpBtn.addEventListener("click", validateForm());

function validateForm() {
  const form = document.getElementById("sign-up-form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  console.log(username.value + password.value + confirmPass.value);
}
