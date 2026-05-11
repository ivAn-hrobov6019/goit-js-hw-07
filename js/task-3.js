const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue === "") {
    textSpan.textContent = "Anonymous";
  } else {
    textSpan.textContent = trimmedValue;
  }
});
