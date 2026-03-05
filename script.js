const input = document.getElementById("urlInput");
const statusEl = document.getElementById("status");

// simple URL regex validation, this is for the validation of the url before we push it to the server
function isValidUrl(url) {
  const regex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
  return regex.test(url);
}

// mock async server, this is the server that will validate the url we will assume the file or folder exists
function checkUrl(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const type = url.endsWith("/") ? "folder" : "file";
      resolve({ exists: true, type });
    }, 500);
  });
}

// this is the event listener for the input field , we will simulate the server call here and keep in mind the too many requests,we will be updating the status here
input.addEventListener("input", () => {
  const url = input.value;
});
