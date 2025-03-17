export const showError = (container) => {
    container.classList.remove('hidden');
    container.innerHTML = "";
    
    const errorContainer = document.createElement("div");
    errorContainer.className = "error";
    errorContainer.innerHTML = `
        <p>Please enter a valid URL!</p>
    `;
    container.appendChild(errorContainer);
}
