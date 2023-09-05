const form = document.getElementById("sign-up-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");
  console.log(username.value + password.value + confirmPass.value);

  if (username.value && password.value && confirmPass.value) {
    if (
      username.value.length > 7 &&
      password.value.length > 7 &&
      password.value === confirmPass.value
    ) {
      for (let i = 0; i < username.value.length; i++)
        if (
          username.value.charAt(i) === username.value.charAt(i).toUpperCase()
        ) {
          console.log("Sign-up successful");
        }
    } else alert("Error: please check your input if it matches the criteria.");
  } else alert("Error: please input username and password.");
});
