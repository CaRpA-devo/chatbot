export const folderAnswers = {
    folders:
        "📁 Ordnerstruktur in JavaScript-Projekten\n\n" +
        "Eine gute Ordnerstruktur ist wichtig für die Wartbarkeit und Übersichtlichkeit deines Projekts. Hier sind die wichtigsten Ordner und ihre Verwendung:\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Ordner</th><th>Verwendung</th><th>Beispiele</th></tr>" +
        "<tr><td><code>src</code></td><td>Quellcode des Projekts</td><td>JavaScript-Dateien, Komponenten</td></tr>" +
        "<tr><td><code>public</code></td><td>Statische Dateien</td><td>HTML, CSS, Bilder</td></tr>" +
        "<tr><td><code>components</code></td><td>Wiederverwendbare Komponenten</td><td>UI-Komponenten, Module</td></tr>" +
        "<tr><td><code>assets</code></td><td>Projektressourcen</td><td>Bilder, Fonts, Icons</td></tr>" +
        "<tr><td><code>utils</code></td><td>Hilfsfunktionen</td><td>Helper, Utilities</td></tr>" +
        "<tr><td><code>styles</code></td><td>CSS/SCSS Dateien</td><td>Stylesheets, Themes</td></tr>" +
        "<tr><td><code>tests</code></td><td>Testdateien</td><td>Unit Tests, Integration Tests</td></tr>" +
        "<tr><td><code>docs</code></td><td>Dokumentation</td><td>README, API-Docs</td></tr>" +
        "</table>\n\n" +
        "📌 Best Practices:\n\n" +
        "🔹 Verwende aussagekräftige Namen für Ordner\n" +
        "🔹 Halte die Struktur flach und übersichtlich\n" +
        "🔹 Gruppiere zusammengehörige Dateien\n" +
        "🔹 Verwende eine konsistente Namenskonvention\n\n" +
        "📌 Beispiel einer typischen Struktur:\n" +
        "```\n" +
        "projekt/\n" +
        "├── src/\n" +
        "│   ├── components/\n" +
        "│   ├── utils/\n" +
        "│   └── styles/\n" +
        "├── public/\n" +
        "│   ├── assets/\n" +
        "│   └── index.html\n" +
        "├── tests/\n" +
        "└── docs/\n" +
        "```\n\n" +
        "Diese Struktur hilft dir, dein Projekt besser zu organisieren und macht es für andere Entwickler einfacher zu verstehen! 🚀",

    react:
        "📁 React-Projektstruktur\n\n" +
        "Eine typische React-Projektstruktur ist wie folgt aufgebaut:\n\n" +
        "1. `src/` (Source)\n" +
        "Der Hauptordner für den Quellcode der Anwendung.\n\n" +
        "🔹 `index.js` / `index.tsx`: Einstiegspunkt der Anwendung.\n" +
        "Erklärung: Hier wird der React-App-Root an den DOM angehängt.\n\n" +
        "🔹 `App.js` / `App.tsx`: Die Hauptkomponente der Anwendung.\n" +
        "Erklärung: Häufig die zentrale Komponente, die andere Komponenten zusammenführt.\n\n" +
        "2. `src/components/` (Komponenten)\n" +
        "Für wiederverwendbare UI-Komponenten.\n\n" +
        "🔹 `Button.js`: Ein Button-Komponente\n" +
        "🔹 `Header.js`: Eine Header-Komponente\n" +
        "Warum?: Komponenten kapseln UI-Elemente und deren Verhalten.\n\n" +
        "3. `src/pages/` (Seiten)\n" +
        "Für Seiten, die eine vollständige Ansicht darstellen.\n\n" +
        "🔹 `HomePage.js`: Die Startseite der Anwendung\n" +
        "🔹 `ProfilePage.js`: Eine Profilseite\n" +
        "Warum?: Jede Seite besteht aus verschiedenen Komponenten und kann eigene Logik enthalten.\n\n" +
        "4. `src/utils/` (Hilfsfunktionen)\n" +
        "Für allgemeine Hilfsfunktionen, die nicht direkt mit der UI zu tun haben.\n\n" +
        "🔹 `formatDate.js`: Eine Funktion zur Datumsformatierung\n" +
        "🔹 `generateUUID.js`: Eine Funktion zur UUID-Erzeugung\n" +
        "Warum?: Hier kommen Funktionen hin, die in verschiedenen Teilen der Anwendung wiederverwendet werden können.\n\n" +
        "5. `src/services/` (Dienste)\n" +
        "Für API-Interaktionen oder Geschäftslogik.\n\n" +
        "🔹 `apiService.js`: Eine Datei, die API-Anfragen verwaltet\n" +
        "🔹 `authService.js`: Eine Datei, die Authentifizierungslogik enthält\n" +
        "Warum?: Dienste kapseln Code, der mit externen Quellen oder komplexer Geschäftslogik arbeitet.\n\n" +
        "6. `src/styles/` (Stile)\n" +
        "Für CSS oder SASS-Dateien.\n\n" +
        "🔹 `main.css`: Die Haupt-CSS-Datei\n" +
        "🔹 `variables.scss`: SASS-Variablen für Farben, Schriftarten etc.\n" +
        "Warum?: Stile werden hier organisiert, um sie einfach zu verwalten und wiederzuverwenden.\n\n" +
        "7. `src/assets/` (Assets)\n" +
        "Für statische Dateien wie Bilder, Schriftarten oder Icons.\n\n" +
        "🔹 `logo.png`: Ein Logo-Bild\n" +
        "🔹 `background.jpg`: Ein Hintergrundbild\n" +
        "Warum?: Hier kommen alle statischen Ressourcen hin, die in der Anwendung verwendet werden.\n\n" +
        "8. `src/hooks/` (React Hooks)\n" +
        "Für benutzerdefinierte React-Hooks.\n\n" +
        "🔹 `useFetch.js`: Ein Hook für das Abrufen von Daten von einer API\n" +
        "🔹 `useLocalStorage.js`: Ein Hook, der das Arbeiten mit localStorage vereinfacht\n" +
        "Warum?: Hooks kapseln wiederverwendbare Logik, die man in mehreren Komponenten verwenden kann.\n\n" +
        "9. `public/`\n" +
        "Für öffentlich zugängliche Dateien, die direkt im Browser geladen werden.\n\n" +
        "🔹 `index.html`: Das Haupt-HTML-Dokument\n" +
        "🔹 `favicon.ico`: Das Favicon der App\n" +
        "Warum?: Alles, was direkt im Browser benötigt wird und nicht durch JavaScript verarbeitet wird.\n\n" +
        "10. `tests/` (Tests)\n" +
        "Für Testdateien, die das Verhalten von Komponenten und Funktionen sicherstellen.\n\n" +
        "🔹 `App.test.js`: Tests für die App-Komponente\n" +
        "🔹 `Button.test.js`: Tests für die Button-Komponente\n" +
        "Warum?: Tests stellen sicher, dass die Anwendung korrekt funktioniert.\n\n" +
        "📌 Zusammengefasste Struktur:\n" +
        "```\n" +
        "src/\n" +
        "│\n" +
        "├── components/      # Wiederverwendbare UI-Komponenten\n" +
        "├── pages/           # Seiten, die eine vollständige Ansicht darstellen\n" +
        "├── utils/           # Allgemeine Hilfsfunktionen\n" +
        "├── services/        # API-Interaktionen oder Geschäftslogik\n" +
        "├── styles/          # CSS oder SASS-Dateien\n" +
        "├── assets/          # Statische Ressourcen (Bilder, Schriftarten)\n" +
        "├── hooks/           # Benutzerdefinierte React-Hooks\n" +
        "└── tests/           # Testdateien\n" +
        "```\n\n" +
        "📌 Warum diese Struktur?\n\n" +
        "🔹 Modularität: Durch die Trennung von UI-Komponenten, Seiten, Hilfsfunktionen und Diensten bleibt der Code übersichtlich und leichter zu warten.\n\n" +
        "🔹 Wiederverwendbarkeit: Durch das Organisieren von Komponenten und Hooks können diese an verschiedenen Stellen der Anwendung wiederverwendet werden.\n\n" +
        "🔹 Skalierbarkeit: Diese Struktur unterstützt das Wachstum der Anwendung, da man leicht neue Seiten, Komponenten oder Dienste hinzufügen kann.\n\n" +
        "🔹 Trennung der Anliegen: Jede Datei hat eine klare Verantwortung, was den Code verständlicher und fehlerresistenter macht.\n\n" +
        "Mit dieser Struktur wird die Wartbarkeit und die Zusammenarbeit im Team erheblich verbessert, und man behält stets den Überblick, auch bei größeren Projekten! 🚀",

    smallprojekt:
        "📁 Struktur für kleine Projekte\n\n" +
        "Eine übersichtliche Struktur für kleinere Projekte:\n\n" +
        "1. `src/` (Source)\n" +
        "Der Hauptordner für den Quellcode der Anwendung.\n\n" +
        "🔹 `index.js` / `index.tsx`: Einstiegspunkt der Anwendung\n" +
        "Erklärung: Hier wird der React-App-Root an den DOM angehängt.\n\n" +
        "🔹 `App.js` / `App.tsx`: Die Hauptkomponente der Anwendung\n" +
        "Erklärung: Häufig die zentrale Komponente, die andere Komponenten zusammenführt.\n\n" +
        "2. `src/components/` (Komponenten)\n" +
        "Für wiederverwendbare UI-Komponenten.\n\n" +
        "🔹 `Button.js`: Ein Button-Komponente\n" +
        "🔹 `Header.js`: Eine Header-Komponente\n" +
        "Warum?: Komponenten kapseln UI-Elemente und deren Verhalten.\n\n" +
        "3. `src/pages/` (Seiten)\n" +
        "Für Seiten, die eine vollständige Ansicht darstellen.\n\n" +
        "🔹 `HomePage.js`: Die Startseite der Anwendung\n" +
        "🔹 `ProfilePage.js`: Eine Profilseite\n" +
        "Warum?: Jede Seite besteht aus verschiedenen Komponenten und kann eigene Logik enthalten.\n\n" +
        "4. `src/utils/` (Hilfsfunktionen)\n" +
        "Für allgemeine Hilfsfunktionen, die nicht direkt mit der UI zu tun haben.\n\n" +
        "🔹 `formatDate.js`: Eine Funktion zur Datumsformatierung\n" +
        "🔹 `generateUUID.js`: Eine Funktion zur UUID-Erzeugung\n" +
        "Warum?: Hier kommen Funktionen hin, die in verschiedenen Teilen der Anwendung wiederverwendet werden können.\n\n" +
        "5. `src/services/` (Dienste)\n" +
        "Für API-Interaktionen oder Geschäftslogik.\n\n" +
        "🔹 `apiService.js`: Eine Datei, die API-Anfragen verwaltet\n" +
        "🔹 `authService.js`: Eine Datei, die Authentifizierungslogik enthält\n" +
        "Warum?: Dienste kapseln Code, der mit externen Quellen oder komplexer Geschäftslogik arbeitet.\n\n" +
        "6. `src/styles/` (Stile)\n" +
        "Für CSS oder SASS-Dateien.\n\n" +
        "🔹 `main.css`: Die Haupt-CSS-Datei\n" +
        "🔹 `variables.scss`: SASS-Variablen für Farben, Schriftarten etc.\n" +
        "Warum?: Stile werden hier organisiert, um sie einfach zu verwalten und wiederzuverwenden.\n\n" +
        "7. `src/assets/` (Assets)\n" +
        "Für statische Dateien wie Bilder, Schriftarten oder Icons.\n\n" +
        "🔹 `logo.png`: Ein Logo-Bild\n" +
        "🔹 `background.jpg`: Ein Hintergrundbild\n" +
        "Warum?: Hier kommen alle statischen Ressourcen hin, die in der Anwendung verwendet werden.\n\n" +
        "8. `src/hooks/` (React Hooks)\n" +
        "Für benutzerdefinierte React-Hooks.\n\n" +
        "🔹 `useFetch.js`: Ein Hook für das Abrufen von Daten von einer API\n" +
        "🔹 `useLocalStorage.js`: Ein Hook, der das Arbeiten mit localStorage vereinfacht\n" +
        "Warum?: Hooks kapseln wiederverwendbare Logik, die man in mehreren Komponenten verwenden kann.\n\n" +
        "9. `public/`\n" +
        "Für öffentlich zugängliche Dateien, die direkt im Browser geladen werden.\n\n" +
        "🔹 `index.html`: Das Haupt-HTML-Dokument\n" +
        "🔹 `favicon.ico`: Das Favicon der App\n" +
        "Warum?: Alles, was direkt im Browser benötigt wird und nicht durch JavaScript verarbeitet wird.\n\n" +
        "10. `tests/` (Tests)\n" +
        "Für Testdateien, die das Verhalten von Komponenten und Funktionen sicherstellen.\n\n" +
        "🔹 `App.test.js`: Tests für die App-Komponente\n" +
        "🔹 `Button.test.js`: Tests für die Button-Komponente\n" +
        "Warum?: Tests stellen sicher, dass die Anwendung korrekt funktioniert.\n\n" +
        "📌 Zusammengefasste Struktur:\n" +
        "```\n" +
        "src/\n" +
        "│\n" +
        "├── components/      # Wiederverwendbare UI-Komponenten\n" +
        "├── pages/           # Seiten, die eine vollständige Ansicht darstellen\n" +
        "├── utils/           # Allgemeine Hilfsfunktionen\n" +
        "├── services/        # API-Interaktionen oder Geschäftslogik\n" +
        "├── styles/          # CSS oder SASS-Dateien\n" +
        "├── assets/          # Statische Ressourcen (Bilder, Schriftarten)\n" +
        "├── hooks/           # Benutzerdefinierte React-Hooks\n" +
        "└── tests/           # Testdateien\n" +
        "```\n\n" +
        "📌 Warum diese Struktur?\n\n" +
        "🔹 Modularität: Durch die Trennung von UI-Komponenten, Seiten, Hilfsfunktionen und Diensten bleibt der Code übersichtlich und leichter zu warten.\n\n" +
        "🔹 Wiederverwendbarkeit: Durch das Organisieren von Komponenten und Hooks können diese an verschiedenen Stellen der Anwendung wiederverwendet werden.\n\n" +
        "🔹 Skalierbarkeit: Diese Struktur unterstützt das Wachstum der Anwendung, da man leicht neue Seiten, Komponenten oder Dienste hinzufügen kann.\n\n" +
        "🔹 Trennung der Anliegen: Jede Datei hat eine klare Verantwortung, was den Code verständlicher und fehlerresistenter macht.\n\n" +
        "Mit dieser Struktur wird die Wartbarkeit und die Zusammenarbeit im Team erheblich verbessert, und man behält stets den Überblick, auch bei größeren Projekten! 🚀",

    default:
        "Möchtest du mehr über Ordnerstrukturen oder Ordneroperationen in JavaScript wissen?",
};
