const fileInput = document.getElementById("fileInput");
const fileNameDisplay = document.getElementById("fileName");

fileInput.addEventListener("change", () => {
  const fileName = fileInput.files[0]?.name || "No file chosen";
  fileNameDisplay.textContent = fileName;
});