const inputs = document.querySelectorAll(".input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === input.maxLength) {
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value.length === 0) {
      const prevInput = inputs[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  });
});
