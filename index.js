function verifyError() {
  const input = document.querySelector("#input");
  const error = document.querySelector(".errorMsg");
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const emailValue = input.value.trim();
  const result = regex.test(emailValue);

  if (result) {
    input.classList.remove("error");
    error.classList.remove("error");
  } else {
    input.classList.add("error");
    error.classList.add("error");
  }
}
