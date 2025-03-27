import { postChatMessage } from "./components/postChatmsg.js";

const msgContainer = document.getElementById("msgContainer");
const chatField = document.getElementById("chatField");

// Exportiere die Funktion für den HTML-Event-Handler
window.postChatMessage = () => postChatMessage(msgContainer, chatField);
