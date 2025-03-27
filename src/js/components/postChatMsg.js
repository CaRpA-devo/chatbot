import { functionAnswers } from "./answers/functions.js";
import { loopAnswers } from "./answers/loops.js";
import { arrayAnswers } from "./answers/arrays.js";
import { folderAnswers } from "./answers/folders.js";
import { docsAnswers } from "./answers/docs.js";
import { objectAnswers } from "./answers/objects.js";
import { highlightMethods } from "../utils/codeFormatter.js";

// Kombiniere alle Antworten
const antworten = {
    ...functionAnswers,
    ...loopAnswers,
    ...arrayAnswers,
    ...folderAnswers,
    ...docsAnswers,
    ...objectAnswers,
    default: "Achte auf deine Eingabe und schaue in die Legende für die KEYS.",
};

export function postChatMessage(msgContainer, chatField) {
    const userInput = chatField.value.toLowerCase();
    chatField.value = "";

    const userMsg = document.createElement("div");
    userMsg.className = "msg-me";
    userMsg.textContent = userInput;
    msgContainer.appendChild(userMsg);

    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "msg";

        // Ersetze Code-Blöcke mit formatiertem HTML
        let response = antworten[userInput] || antworten.default;

        // Formatiere zuerst den normalen Text
        response = highlightMethods(response);

        // Dann formatiere die Code-Blöcke
        response = response.replace(
            /```javascript\n([\s\S]*?)```/g,
            (match, code) => {
                const highlightedCode = highlightMethods(code);
                return `<pre><code class="language-javascript">${highlightedCode}</code></pre>`;
            }
        );

        botMsg.innerHTML = response.replace(/\n/g, "<br>");
        msgContainer.appendChild(botMsg);
    }, 1000);
}
