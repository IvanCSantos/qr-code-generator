const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando QR Code...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "QR Code criado!";
    qrCodeBtn.style.opacity = 0.6;
    qrCodeBtn.style.cursor = "auto";
    qrCodeBtn.disabled = true;
  });

  setTimeout(() => {
    qrCodeBtn.innerText = "Gerar QR Code";
    qrCodeBtn.style.opacity = 1;
    qrCodeBtn.style.cursor = "pointer";
    qrCodeBtn.disabled = false;
  }, 3000);
}

qrCodeBtn.addEventListener("click", generateQrCode);

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
  }
});
