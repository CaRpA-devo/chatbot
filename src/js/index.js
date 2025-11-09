import { postChatMessage } from "./components/postChatMsg.js";

const msgContainer = document.getElementById("msgContainer");
const chatField = document.getElementById("chatField");

// Schreibmaschinen-Animation
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Starte die Animation wenn die Seite geladen ist
document.addEventListener("DOMContentLoaded", () => {
  const welcomeMsg = document.querySelector(".msg");
  const originalText = welcomeMsg.textContent;
  typeWriter(welcomeMsg, originalText);
});

// Exportiere die Funktion für den HTML-Event-Handler
window.postChatMessage = () => postChatMessage(msgContainer, chatField);
