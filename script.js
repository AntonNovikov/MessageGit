const messageInput = document.querySelector("#message-input");
const subBtn = document.querySelector("#submit");
const messageP = document.querySelector("#mesage-output");
subBtn.addEventListener("click", getMessage);
messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getMessage();
  }
});

function getMessage() {
  messageP.textContent = messageInput.value;
  messageInput.value = "";
}
