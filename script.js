//your JS code here. If required.
function updateOutputText() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

function updateElementText() {
  const outputElement = document.getElementById("output");
  
  updateOutputText().then((message) => {
    outputElement.textContent = message;
  });
}
