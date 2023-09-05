const form = document.getElementById("sign-up-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");

  if (username.value && password.value && confirmPass.value) {
    if (
      username.value.length > 7 &&
      password.value.length > 7 &&
      password.value === confirmPass.value
    ) {
      capitalLetter = false;
      for (let i = 0; i < username.value.length; i++) {
        if (
          username.value.charAt(i) !== username.value.charAt(i).toLowerCase()
        ) {
          capitalLetter = true;
        }
      }
      if (capitalLetter == true) {
        alert("Signed-up Succesfully.");
      } else alert("Please check your username.");
    } else {
      alert("please check your input if it matches the criteria.");
    }
  } else {
    alert("please put in username and password.");
  }
});

const newsletter = document.getElementById("newsletter");

newsletter.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(newsletter);

  const email = document.getElementById("newsletter-email");
  if (
    email.value.includes("@") &&
    email.value.includes(".") &&
    email.value.length > 7
  ) {
    alert("You are now subscribed to newsletter.");
  } else {
    alert("Please put in a valid email.");
  }
});
