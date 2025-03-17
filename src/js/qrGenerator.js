import { QRContainer, userInput } from "./domElements.js";
import { inputFormatter } from "./utils.js";

export let QR_Code;

export const showQR = async () => {
  QRContainer.innerHTML = "";

  QR_Code = await new QRCode(QRContainer, {
    text: userInput.value,
    width: 200,
    height: 200,
  });
};

export const downloadQR = () => {
  const qrImageURL = QRContainer.firstChild.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = qrImageURL;
  link.download = inputFormatter(userInput.value);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
