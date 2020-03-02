document.addEventListener("contextmenu", event => {
  event.preventDefault();
});

document.body.addEventListener("keydown", event => {
  if (event.ctrlKey || event.altKey || event.shiftKey) {
    event.preventDefault();
  }
});
