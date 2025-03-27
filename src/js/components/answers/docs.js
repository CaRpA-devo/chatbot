export const docsAnswers = {
    docs:
        "📚 Dokumentation in JavaScript-Projekten\n\n" +
        "Eine gute Dokumentation ist essentiell für die Wartbarkeit und Verständlichkeit deines Projekts. Hier sind die wichtigsten Aspekte:\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Dokumentationstyp</th><th>Verwendung</th><th>Beispiele</th></tr>" +
        "<tr><td><code>README.md</code></td><td>Projektübersicht</td><td>Installation, Nutzung, Konfiguration</td></tr>" +
        "<tr><td><code>JSDoc</code></td><td>Code-Dokumentation</td><td>Funktionen, Klassen, Module</td></tr>" +
        "<tr><td><code>API-Docs</code></td><td>API-Dokumentation</td><td>Endpoints, Parameter, Responses</td></tr>" +
        "<tr><td><code>CHANGELOG.md</code></td><td>Versionshistorie</td><td>Änderungen, Updates, Fixes</td></tr>" +
        "<tr><td><code>CONTRIBUTING.md</code></td><td>Beitragsrichtlinien</td><td>Code-Style, PR-Prozess</td></tr>" +
        "</table>\n\n" +
        "📌 Best Practices:\n\n" +
        "🔹 Schreibe klare und präzise Dokumentation\n" +
        "🔹 Halte die Dokumentation aktuell\n" +
        "🔹 Verwende Beispiele und Code-Snippets\n" +
        "🔹 Dokumentiere Änderungen und Updates\n\n" +
        "📌 Beispiel einer README.md:\n" +
        "```markdown\n" +
        "# Projektname\n\n" +
        "Kurze Beschreibung des Projekts.\n\n" +
        "## Installation\n\n" +
        "```bash\n" +
        "npm install projektname\n" +
        "```\n\n" +
        "## Nutzung\n\n" +
        "```javascript\n" +
        "import { projektname } from 'projektname';\n\n" +
        "// Beispielcode\n" +
        "```\n\n" +
        "## Konfiguration\n\n" +
        "Beschreibung der Konfigurationsmöglichkeiten.\n\n" +
        "## Lizenz\n\n" +
        "MIT\n" +
        "```\n\n" +
        "📌 JSDoc Beispiel:\n" +
        "```javascript\n" +
        "/**\n" +
        " * Berechnet die Summe zweier Zahlen\n" +
        " * @param {number} a - Erste Zahl\n" +
        " * @param {number} b - Zweite Zahl\n" +
        " * @returns {number} Die Summe von a und b\n" +
        " * @throws {Error} Wenn die Parameter keine Zahlen sind\n" +
        " */\n" +
        "function add(a, b) {\n" +
        "    if (typeof a !== 'number' || typeof b !== 'number') {\n" +
        "        throw new Error('Parameter müssen Zahlen sein');\n" +
        "    }\n" +
        "    return a + b;\n" +
        "}\n" +
        "```\n\n" +
        "📌 API-Dokumentation Beispiel:\n" +
        "```javascript\n" +
        "/**\n" +
        " * @api {get} /api/users/:id Benutzerinformationen abrufen\n" +
        " * @apiName GetUser\n" +
        " * @apiGroup User\n" +
        " *\n" +
        " * @apiParam {Number} id Benutzer-ID\n" +
        " *\n" +
        " * @apiSuccess {String} name Benutzername\n" +
        " * @apiSuccess {String} email Benutzer-E-Mail\n" +
        " *\n" +
        " * @apiError {Object} 404 Benutzer nicht gefunden\n" +
        " */\n" +
        "app.get('/api/users/:id', (req, res) => {\n" +
        "    // Implementierung\n" +
        "});\n" +
        "```\n\n" +
        "📌 CHANGELOG.md Beispiel:\n" +
        "```markdown\n" +
        "# Changelog\n\n" +
        "## [1.0.0] - 2024-03-20\n" +
        "### Hinzugefügt\n" +
        "- Neue Feature A\n" +
        "- Neue Feature B\n" +
        "\n" +
        "### Geändert\n" +
        "- Verbesserung X\n" +
        "- Optimierung Y\n" +
        "\n" +
        "### Behoben\n" +
        "- Bug Z\n" +
        "```\n\n" +
        "📝 CHANGELOG.md erstellen\n\n" +
        "Ein CHANGELOG.md dokumentiert alle wichtigen Änderungen in deinem Projekt. Hier ist ein Beispiel:\n\n" +
        "```markdown\n" +
        "# Changelog\n\n" +
        "Alle wichtigen Änderungen in diesem Projekt werden in dieser Datei dokumentiert.\n\n" +
        "Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),\n" +
        "und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).\n\n" +
        "## [1.0.0] - 2024-03-20\n\n" +
        "### Hinzugefügt\n" +
        "- Neue Feature A\n" +
        "- Neue Feature B\n" +
        "- Neue Feature C\n\n" +
        "### Geändert\n" +
        "- Verbesserung X\n" +
        "- Optimierung Y\n" +
        "- Performance-Verbesserung Z\n\n" +
        "### Behoben\n" +
        "- Bug in Feature A\n" +
        "- Sicherheitslücke in Feature B\n" +
        "- Fehler in der API-Integration\n\n" +
        "### Entfernt\n" +
        "- Veraltete Funktion X\n" +
        "- Nicht mehr benötigte Abhängigkeit Y\n\n" +
        "## [0.1.0] - 2024-03-15\n\n" +
        "### Hinzugefügt\n" +
        "- Erste Version des Projekts\n" +
        "- Grundlegende Funktionalitäten\n" +
        "```\n\n" +
        "📌 Best Practices für CHANGELOG.md:\n\n" +
        "🔹 Verwende das Keep a Changelog Format\n" +
        "🔹 Dokumentiere alle wichtigen Änderungen\n" +
        "🔹 Gruppiere Änderungen in Kategorien\n" +
        "🔹 Füge Datum und Versionsnummer hinzu\n" +
        "🔹 Halte die Einträge kurz und prägnant\n\n" +
        "📌 Kategorien für Änderungen:\n\n" +
        "🔹 `Hinzugefügt` - Neue Features\n" +
        "🔹 `Geändert` - Änderungen an bestehenden Features\n" +
        "🔹 `Behoben` - Bugfixes\n" +
        "🔹 `Entfernt` - Entfernte Features\n" +
        "🔹 `Sicherheit` - Sicherheitsrelevante Änderungen\n" +
        "🔹 `Abhängigkeiten` - Änderungen an Abhängigkeiten\n\n" +
        "Ein guter CHANGELOG hilft Nutzern und Entwicklern, die Entwicklung deines Projekts zu verfolgen! 📈",

    readme:
        "📝 README.md erstellen\n\n" +
        "Eine gute README.md ist der erste Eindruck deines Projekts. Hier sind die wichtigsten Bestandteile:\n\n" +
        "1. `Projektname und Beschreibung`\n" +
        "Kurze und prägnante Beschreibung deines Projekts.\n\n" +
        "2. `Installation`\n" +
        "```bash\n" +
        "npm install projektname\n" +
        "# oder\n" +
        "yarn add projektname\n" +
        "```\n\n" +
        "3. `Nutzung`\n" +
        "```javascript\n" +
        "import { projektname } from 'projektname';\n\n" +
        "// Beispielcode\n" +
        "```\n\n" +
        "4. `Konfiguration`\n" +
        "Beschreibung der Konfigurationsmöglichkeiten.\n\n" +
        "5. `API-Dokumentation`\n" +
        "Übersicht der wichtigsten Funktionen und Methoden.\n\n" +
        "6. `Beitragen`\n" +
        "Informationen für potenzielle Mitwirkende.\n\n" +
        "7. `Lizenz`\n" +
        "Angabe der Lizenz (z.B. MIT).\n\n" +
        "📌 Tipps für eine gute README:\n\n" +
        "🔹 Verwende Emojis für bessere Lesbarkeit\n" +
        "🔹 Füge Screenshots oder GIFs hinzu\n" +
        "🔹 Halte die Dokumentation aktuell\n" +
        "🔹 Verwende klare Formatierung\n" +
        "🔹 Füge Links zu weiterer Dokumentation hinzu\n\n" +
        "Eine gute README macht dein Projekt professioneller und leichter zu verstehen! 🚀",

    jsdoc:
        "📚 JSDoc Dokumentation\n\n" +
        "JSDoc ist ein Dokumentationsformat für JavaScript. Hier sind die wichtigsten Elemente:\n\n" +
        "1. `Funktionsdokumentation`\n" +
        "```javascript\n" +
        "/**\n" +
        " * Berechnet die Summe zweier Zahlen\n" +
        " * @param {number} a - Erste Zahl\n" +
        " * @param {number} b - Zweite Zahl\n" +
        " * @returns {number} Die Summe von a und b\n" +
        " */\n" +
        "function add(a, b) {\n" +
        "    return a + b;\n" +
        "}\n" +
        "```\n\n" +
        "2. `Klassendokumentation`\n" +
        "```javascript\n" +
        "/**\n" +
        " * Repräsentiert einen Benutzer\n" +
        " * @class\n" +
        " * @param {string} name - Name des Benutzers\n" +
        " * @param {number} age - Alter des Benutzers\n" +
        " */\n" +
        "class User {\n" +
        "    constructor(name, age) {\n" +
        "        this.name = name;\n" +
        "        this.age = age;\n" +
        "    }\n" +
        "}\n" +
        "```\n\n" +
        "3. `Moduldokumentation`\n" +
        "```javascript\n" +
        "/**\n" +
        " * @module utils\n" +
        " * @description Hilfsfunktionen für das Projekt\n" +
        " */\n" +
        "export const utils = {\n" +
        "    // ...\n" +
        "};\n" +
        "```\n\n" +
        "📌 Wichtige JSDoc Tags:\n\n" +
        "🔹 `@param` - Parameter einer Funktion\n" +
        "🔹 `@returns` - Rückgabewert einer Funktion\n" +
        "🔹 `@throws` - Mögliche Fehler\n" +
        "🔹 `@example` - Code-Beispiele\n" +
        "🔹 `@description` - Beschreibung\n" +
        "🔹 `@async` - Asynchrone Funktion\n" +
        "🔹 `@private` - Private Methoden\n" +
        "🔹 `@public` - Öffentliche Methoden\n\n" +
        "📌 Beispiel mit verschiedenen Tags:\n" +
        "```javascript\n" +
        "/**\n" +
        " * Lädt Benutzerdaten von der API\n" +
        " * @async\n" +
        " * @param {string} userId - ID des Benutzers\n" +
        " * @returns {Promise<Object>} Benutzerdaten\n" +
        " * @throws {Error} Wenn die API nicht erreichbar ist\n" +
        " * @example\n" +
        " * const user = await loadUser('123');\n" +
        " * console.log(user.name);\n" +
        " */\n" +
        "async function loadUser(userId) {\n" +
        "    try {\n" +
        "        const response = await fetch(`/api/users/${userId}`);\n" +
        "        return await response.json();\n" +
        "    } catch (error) {\n" +
        "        throw new Error('API nicht erreichbar');\n" +
        "    }\n" +
        "}\n" +
        "```\n\n" +
        "Mit JSDoc machst du deinen Code besser verständlich und professioneller! 📝",

    contributing:
        "🤝 CONTRIBUTING.md erstellen\n\n" +
        "Eine CONTRIBUTING.md hilft anderen Entwicklern, zu deinem Projekt beizutragen. Hier ist ein Beispiel:\n\n" +
        "```markdown\n" +
        "# Contributing Guidelines\n\n" +
        "Vielen Dank für dein Interesse, zu diesem Projekt beizutragen! 🎉\n\n" +
        "## Code of Conduct\n\n" +
        "Dieses Projekt und alle Beteiligten verpflichten sich, unseren Code of Conduct einzuhalten.\n" +
        "Durch die Teilnahme an diesem Projekt erklärst du dich damit einverstanden, diesen Code of Conduct zu befolgen.\n\n" +
        "## Wie kann ich beitragen?\n\n" +
        "### Bug Reports\n" +
        "- Verwende das Issue-Template für Bug Reports\n" +
        "- Beschreibe den Bug so detailliert wie möglich\n" +
        "- Füge Schritte zum Reproduzieren hinzu\n" +
        "- Füge Screenshots oder Videos hinzu, wenn relevant\n\n" +
        "### Feature Requests\n" +
        "- Verwende das Feature Request Template\n" +
        "- Erkläre, warum das Feature nützlich wäre\n" +
        "- Beschreibe die erwartete Funktionalität\n" +
        "- Füge Beispiele oder Mockups hinzu\n\n" +
        "### Pull Requests\n" +
        "1. Forke das Repository\n" +
        "2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)\n" +
        "3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)\n" +
        "4. Push zum Branch (`git push origin feature/AmazingFeature`)\n" +
        "5. Öffne einen Pull Request\n\n" +
        "## Code Style\n\n" +
        "### JavaScript\n" +
        "- Verwende ES6+ Features\n" +
        "- Folge den ESLint Regeln\n" +
        "- Schreibe aussagekräftige Kommentare\n" +
        "- Verwende aussagekräftige Variablennamen\n\n" +
        "### Git Commit Messages\n" +
        "- Verwende die Gegenwartsform ('Add feature' nicht 'Added feature')\n" +
        "- Verwende den Imperativ ('Move cursor to...' nicht 'Moves cursor to...')\n" +
        "- Begrenze die erste Zeile auf 72 Zeichen\n" +
        "- Verwende den Body für detaillierte Erklärungen\n\n" +
        "## Entwicklungsumgebung\n\n" +
        "1. Installiere Node.js (Version 14 oder höher)\n" +
        "2. Forke das Repository\n" +
        "3. Klone deinen Fork (`git clone https://github.com/your-username/project.git`)\n" +
        "4. Installiere Abhängigkeiten (`npm install`)\n" +
        "5. Starte den Entwicklungsserver (`npm run dev`)\n\n" +
        "## Tests\n\n" +
        "- Schreibe Tests für neue Features\n" +
        "- Stelle sicher, dass alle Tests bestehen\n" +
        "- Aktualisiere Tests bei Änderungen\n\n" +
        "## Lizenz\n\n" +
        "Durch das Erstellen eines Pull Requests erklärst du dich damit einverstanden, dass deine Änderungen unter der MIT-Lizenz veröffentlicht werden.\n" +
        "```\n\n" +
        "📌 Wichtige Bestandteile einer CONTRIBUTING.md:\n\n" +
        "🔹 Code of Conduct\n" +
        "🔹 Beitragsmöglichkeiten\n" +
        "🔹 Code Style Guidelines\n" +
        "🔹 Pull Request Prozess\n" +
        "🔹 Entwicklungsumgebung Setup\n" +
        "🔹 Testrichtlinien\n" +
        "🔹 Lizenzinformationen\n\n" +
        "Eine gute CONTRIBUTING.md macht es anderen Entwicklern leicht, zu deinem Projekt beizutragen! 🤝",
};
