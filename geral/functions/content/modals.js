// modal para entrar em uma conta
function showModal(modalId) {
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

function attachModalClickListener(buttonSelector, modalId) {
  const buttons = document.querySelectorAll(buttonSelector);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showModal(modalId);
    });
  });
}

function modaisFunction() {
  attachModalClickListener(".loginInput", "enterAccountModal");
  attachModalClickListener(".registerInput", "registerAccountModal");
}

export { modaisFunction };
