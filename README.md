# Second Brain – Chatbot

Ein schlanker JavaScript-Chatbot, der Einsteiger\*innen beim Lernen grundlegender JavaScript-Konzepte unterstützt. Die Anwendung kombiniert eine statische Frontend-Oberfläche mit einem Express-Server, der die Inhalte ausliefert.

## Highlights

- Interaktives Chat-Interface mit Schreibmaschinen-Effekt für Nutzer- und Bot-Nachrichten
- Kontextmenü („Legende“) zum schnellen Einfügen vordefinierter Fragen
- Wissensbasis mit Antworten zu Arrays, Schleifen, Funktionen, Objekten, Ordnern und Doku-Themen
- Syntax-Hervorhebung für häufige JavaScript-Methoden in Antworten
- Express-Server für lokale Entwicklung und Deployment auf Node-basierten Plattformen

## Tech-Stack

- Node.js & Express (Static File Server)
- Vanilla JavaScript für Frontend-Logik
- Nodemon für den Entwicklungsmodus
- Jest (vorbereitet) für Unit-Tests

## Schnellstart

### Voraussetzungen

- Node.js ≥ 18 (für ES-Modul-Support und moderne Syntax)
- npm (wird mit Node ausgeliefert)

### Installation

```bash
git clone <repository-url>
cd chatbot
npm install
```

### Entwicklungsmodus

```bash
npm run dev
```

Der Befehl startet den Express-Server mit Nodemon und lädt Änderungen automatisch neu. Die App ist anschließend unter `http://localhost:3000` erreichbar.

### Produktion

```bash
npm start
```

Dieser Befehl startet den Express-Server ohne automatisches Reloading und eignet sich für einfache Deployments.

### Tests

```bash
npm test
```

Jest ist bereits konfiguriert. Sobald Tests hinzugefügt werden, lassen sie sich mit dem obigen Kommando ausführen.

## Projektstruktur

```
.
├── public/
│   └── index.html              # Einstiegsseite mit UI und Legende
├── src/
│   ├── assets/
│   │   ├── images/             # Logos & Grafiken
│   │   └── styles.css          # zentrales Styling
│   ├── index.js                # Express-Server
│   └── js/
│       ├── components/
│       │   ├── answers/        # thematische Antwort-Sammlungen
│       │   └── postChatMsg.js  # Chat-Steuerung & Antwort-Rendering
│       └── utils/
│           └── codeFormatter.js# Syntax-Hervorhebung
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

## Architekturüberblick

- `src/index.js` startet einen Express-Server, dient statische Assets aus und leitet Anfragen auf `public/index.html`, sodass das Frontend als Single-Page-App agieren kann.
- `public/index.html` enthält das UI, bindet Styles sowie die Frontend-Logik ein und steuert das Legenden-Menü.
- `src/js/components/postChatMsg.js` verknüpft Nutzereingaben mit der Wissensbasis, baut Antworten dynamisch auf und sorgt für die Schreibmaschinen-Animation.
- `src/js/utils/codeFormatter.js` markiert häufige JavaScript-Methoden in Antworten, um Lesbarkeit und Lernwert zu erhöhen.

## Erweiterung der Wissensbasis

Die Antworten sind modular in `src/js/components/answers/` organisiert. Um neue Themen oder Fragen hinzuzufügen:

1. Legen Sie eine neue Datei im `answers`-Verzeichnis an oder erweitern Sie eine bestehende Datei.
2. Exportieren Sie ein Objekt mit Kleinbuchstaben-Keys (die Nutzer\*innen eingeben) und String-Antworten.
3. Importieren Sie das Objekt in `postChatMsg.js` und ergänzen Sie es in der `antworten`-Map.
4. Optional: Fügen Sie den neuen Key in der Legende in `public/index.html` hinzu, damit er per Klick verfügbar ist.

## Deployment-Hinweise

Der Server ist so konzipiert, dass er statische Dateien ausliefert und alle Routen auf `index.html` umleitet. Für ein Deployment auf Plattformen wie Render, Railway, Heroku o. Ä. kann das Projekt unverändert verwendet werden; stellen Sie lediglich sicher, dass die Plattform die `PORT`-Umgebungsvariable setzt.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Details siehe `LICENSE`.
