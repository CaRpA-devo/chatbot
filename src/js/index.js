const msgContainer = document.getElementById("msgContainer");
const chatField = document.getElementById("chatField");

// Vordefinierte Antworten
const antworten = {
    hallo: "Hallo! Ich bin ein Test-Chatbot. Wie kann ich dir helfen?",
    "wie geht es dir":
        "Mir geht es gut, danke! Ich bin ein Test-Chatbot und helfe dir gerne.",
    "was kannst du":
        "Ich kann dir verschiedene Dinge erklären, zum Beispiel:\n- Programmierung\n- Mathematik\n- Naturwissenschaften\n\nStelle mir einfach eine Frage!",
    danke: "Gerne! Kann ich dir noch bei etwas anderem helfen?",
    tschüss: "Auf Wiedersehen! Komm bald wieder!",
    default:
        "Das ist eine interessante Frage! Als Test-Chatbot kann ich dir leider keine echte Antwort geben, aber ich bin hier, um dir zu zeigen, wie ein Chatbot funktioniert.",
};

function postChatMessage() {
    const userMessage = chatField.value.toLowerCase();
    msgContainer.innerHTML += `<div class="msg-me">${chatField.value}</div>`;

    // Suche nach einer passenden Antwort
    let response = antworten[userMessage] || antworten.default;

    // Füge die Antwort mit einer kleinen Verzögerung hinzu
    setTimeout(() => {
        msgContainer.innerHTML += `<div class="msg">${response}</div>`;
        chatField.value = "";
    }, 500);
}
