function onClickSubmit() {
  let buttonEl = document.getElementById("hello-submit");
  buttonEl.classList.remove("submit-btn");
  buttonEl.classList.add("submit-btn-success");

  let formEl = document.getElementById("nameForm");
  formEl.reset();
}

function onLoad() {
  let buttonEl = document.getElementById("hello-submit");
  buttonEl.classList.add("submit-btn");
}

module.exports = {onLoad, onClickSubmit};
