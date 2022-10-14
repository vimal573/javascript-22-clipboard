const textInEl = document.querySelector(".input");
const copyBtnEl = document.querySelector(".copyBtn");
const proTextEl = document.querySelector(".progress-text");

textInEl.addEventListener("input", () => {
  proTextEl.textContent = `Typing.....`;
});

copyBtnEl.addEventListener("click", () => {
  if (!textInEl.value) {
    proTextEl.textContent = `Enter Some text`;
    return;
  }

  navigator.clipboard.writeText(textInEl.value).then(
    () => {
      /* clipboard successfully set */
      proTextEl.textContent = `text Copied to clipboard`;
    },
    () => {
      /* clipboard write failed */
    }
  );
});
