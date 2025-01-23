import {
  generateBtn,
  downloadBtn,
  shareBtn,
  shareModal,
  shareFacebook,
  shareTwitter,
  shareLinkedIn,
  closeModalBtn,
  backHome,
  header,
  generateWrapper,
  viewWrapper,
  userInput,
  errorContainer,
} from "./domElements.js";
import { shareOnFacebook, shareOnLinkedIn, shareOnTwitter } from "./share.js";

import { showQR, downloadQR } from "./qrGenerator.js";
import { showError } from "./errorView.js";

let pageView = 1;

const goBackHome = () => {
  pageView--;
  header.classList.toggle("qr-active");
  generateWrapper.classList.toggle("hidden");
  viewWrapper.classList.toggle("hidden");
};

generateBtn.addEventListener("click", async () => {
  if (userInput.value === "") {
    showError(errorContainer);
    return;
  } else {
    errorContainer.classList.add("hidden");
    pageView++;
    header.classList.toggle("qr-active");
    generateWrapper.classList.toggle("hidden");
    viewWrapper.classList.toggle("hidden");
    await showQR();
  }
});

downloadBtn.addEventListener("click", downloadQR);

shareBtn.addEventListener("click", () => {
  shareModal.classList.remove("hidden");
});

shareFacebook.addEventListener("click", shareOnFacebook);
shareLinkedIn.addEventListener("click", shareOnLinkedIn);
shareTwitter.addEventListener("click", shareOnTwitter);

closeModalBtn.addEventListener("click", () => {
  shareModal.classList.add("hidden");
});

backHome.addEventListener("click", () => {
  if (pageView === 2) {
    userInput.value = "";
    goBackHome();
  }
});
