import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien aus dem Root-Verzeichnis servieren
app.use(express.static(join(__dirname, "..")));

// Alle Routen auf index.html leiten (für SPA)
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
});
