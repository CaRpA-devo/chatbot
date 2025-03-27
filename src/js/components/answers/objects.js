export const objectAnswers = {
    objectmethoden:
        "📚 Objektmethoden in JavaScript\n\n" +
        "Hier sind die wichtigsten Methoden für die Arbeit mit Objekten:\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Methode</th><th>Beschreibung</th><th>Beispiel</th></tr>" +
        "<tr><td><code>Object.keys()</code></td><td>Gibt ein Array der Schlüssel eines Objekts zurück</td><td><code>Object.keys({a: 1, b: 2})</code> → <code>['a', 'b']</code></td></tr>" +
        "<tr><td><code>Object.values()</code></td><td>Gibt ein Array der Werte eines Objekts zurück</td><td><code>Object.values({a: 1, b: 2})</code> → <code>[1, 2]</code></td></tr>" +
        "<tr><td><code>Object.entries()</code></td><td>Gibt ein Array von Arrays (Schlüssel-Wert-Paare) zurück</td><td><code>Object.entries({a: 1, b: 2})</code> → <code>[['a', 1], ['b', 2]]</code></td></tr>" +
        "<tr><td><code>Object.assign()</code></td><td>Kopiert Eigenschaften von einem oder mehreren Objekten in ein Zielobjekt</td><td><code>Object.assign({}, obj1, obj2)</code></td></tr>" +
        "<tr><td><code>Object.freeze()</code></td><td>Macht ein Objekt unveränderlich</td><td><code>Object.freeze(obj)</code></td></tr>" +
        "<tr><td><code>Object.create()</code></td><td>Erstellt ein neues Objekt mit einem bestimmten Prototypen</td><td><code>Object.create(prototype)</code></td></tr>" +
        "<tr><td><code>Object.hasOwnProperty()</code></td><td>Prüft, ob das Objekt eine bestimmte Eigenschaft besitzt</td><td><code>obj.hasOwnProperty('prop')</code></td></tr>" +
        "<tr><td><code>delete</code></td><td>Entfernt eine Eigenschaft aus einem Objekt</td><td><code>delete obj.prop</code></td></tr>" +
        "<tr><td><code>JSON.parse(JSON.stringify())</code></td><td>Einfache tiefe Kopie eines Objekts</td><td><code>JSON.parse(JSON.stringify(obj))</code></td></tr>" +
        "<tr><td><code>structuredClone()</code></td><td>Moderne Methode für tiefe Kopien</td><td><code>structuredClone(obj)</code></td></tr>" +
        "<tr><td><code>Rekursive Funktion</code></td><td>Benutzerdefinierte tiefe Kopie</td><td><code>deepClone(obj)</code></td></tr>" +
        "</table>\n\n" +
        "📌 Wichtige Konzepte:\n\n" +
        "🔹 `Prototypen`: JavaScript-Objekte haben einen Prototypen, der ihnen Eigenschaften und Methoden vererbt\n" +
        "🔹 `Objektmodifikationen`: Standardmäßig sind Objekte veränderbar, aber mit `Object.freeze()` kannst du die Unveränderlichkeit erzwingen\n" +
        "🔹 `Kombination und Kopieren`: Mit `Object.assign()` und `Object.create()` kannst du Objekte zusammenführen oder neue Objekte auf Basis eines Prototyps erstellen\n" +
        "🔹 `Schlüssel und Werte`: `Object.keys()`, `Object.values()` und `Object.entries()` sind hilfreich, um das Objekt zu inspizieren und zu durchlaufen\n\n" +
        "📌 Tiefe Kopien:\n\n" +
        "🔹 `JSON.parse(JSON.stringify())`: Einfach, funktioniert für viele Fälle, verliert aber Funktionen, Symbole und undefined\n" +
        "🔹 `structuredClone()`: Beste Methode, behält undefined, Map, Set, aber nicht in allen Browsern verfügbar\n" +
        "🔹 `Rekursive Funktion`: Volle Kontrolle, funktioniert immer, aber etwas langsamer\n\n" +
        "Das Verständnis dieser Methoden hilft dir dabei, effizient mit Objekten in JavaScript zu arbeiten und gängige Programmieraufgaben zu bewältigen! 🚀",

    keys:
        "🔑 `Object.keys()` - Schlüssel eines Objekts abrufen\n\n" +
        "Die Methode `Object.keys(objekt)` gibt ein Array mit allen eigenen (nicht vererbten) Schlüsseln eines Objekts zurück.\n\n" +
        "📌 Syntax:\n" +
        "```javascript\n" +
        "Object.keys(objekt);\n" +
        "// objekt: Das Objekt, dessen Schlüssel als Array zurückgegeben werden sollen\n" +
        "```\n\n" +
        "📌 Beispiele:\n\n" +
        "1. Einfache Objekte:\n" +
        "```javascript\n" +
        "const person = { name: 'Alice', alter: 25, beruf: 'Entwickler' };\n" +
        "console.log(Object.keys(person));\n" +
        "// → ['name', 'alter', 'beruf']\n" +
        "```\n\n" +
        "2. Leeres Objekt:\n" +
        "```javascript\n" +
        "console.log(Object.keys({}));\n" +
        "// → []\n" +
        "```\n\n" +
        "3. Objekte mit Methoden:\n" +
        "```javascript\n" +
        "const auto = {\n" +
        "    marke: 'BMW',\n" +
        "    modell: 'X5',\n" +
        "    baujahr: 2022,\n" +
        "    fahren: function() {\n" +
        "        console.log('Das Auto fährt.');\n" +
        "    }\n" +
        "};\n" +
        "console.log(Object.keys(auto));\n" +
        "// → ['marke', 'modell', 'baujahr']\n" +
        "```\n\n" +
        "4. Vererbte Eigenschaften:\n" +
        "```javascript\n" +
        "function Tier(art) {\n" +
        "    this.art = art;\n" +
        "}\n" +
        "Tier.prototype.bewegen = function() {\n" +
        "    console.log('Das Tier bewegt sich.');\n" +
        "};\n" +
        "const hund = new Tier('Hund');\n" +
        "console.log(Object.keys(hund));\n" +
        "// → ['art']\n" +
        "```\n\n" +
        "5. Mit Arrays:\n" +
        "```javascript\n" +
        "const zahlen = [10, 20, 30];\n" +
        "console.log(Object.keys(zahlen));\n" +
        "// → ['0', '1', '2']\n" +
        "```\n\n" +
        "📌 Wichtige Hinweise:\n\n" +
        "🔹 Enthält nur eigene Eigenschaften, keine vererbten\n" +
        "🔹 Ignoriert Methoden\n" +
        "🔹 Gibt bei Arrays die Indizes als Strings zurück\n\n" +
        "📌 Anwendungsfälle:\n\n" +
        "🔹 Wenn du alle Schlüssel eines Objekts brauchst\n" +
        "🔹 Wenn du ein Objekt iterieren willst (z.B. mit forEach)\n" +
        "🔹 Wenn du prüfen willst, ob ein Objekt Eigenschaften hat\n\n" +
        "📌 Beispiel: Alle Werte eines Objekts ausgeben\n" +
        "```javascript\n" +
        "const person = { name: 'Alice', alter: 25, beruf: 'Entwickler' };\n" +
        "Object.keys(person).forEach(key => {\n" +
        "    console.log(`${key}: ${person[key]}`);\n" +
        "});\n" +
        "// Ausgabe:\n" +
        "// name: Alice\n" +
        "// alter: 25\n" +
        "// beruf: Entwickler\n" +
        "```\n\n" +
        "`Object.keys()` ist eine schnelle und einfache Methode, um die Eigenschaften eines Objekts zu erhalten! 🚀",

    values:
        "🔑 `Object.values()` - Werte eines Objekts abrufen\n\n" +
        "Die Methode `Object.values(objekt)` gibt ein Array mit allen Werten der eigenen (nicht vererbten) Eigenschaften eines Objekts zurück.\n\n" +
        "📌 Syntax:\n" +
        "```javascript\n" +
        "Object.values(objekt);\n" +
        "// objekt: Das Objekt, dessen Werte als Array zurückgegeben werden sollen\n" +
        "```\n\n" +
        "📌 Beispiele:\n\n" +
        "1. Einfache Objekte:\n" +
        "```javascript\n" +
        "const person = { name: 'Alice', alter: 25, beruf: 'Entwickler' };\n" +
        "console.log(Object.values(person));\n" +
        "// → ['Alice', 25, 'Entwickler']\n" +
        "```\n\n" +
        "2. Leeres Objekt:\n" +
        "```javascript\n" +
        "console.log(Object.values({}));\n" +
        "// → []\n" +
        "```\n\n" +
        "3. Objekte mit Methoden:\n" +
        "```javascript\n" +
        "const auto = {\n" +
        "    marke: 'BMW',\n" +
        "    modell: 'X5',\n" +
        "    baujahr: 2022,\n" +
        "    fahren: function() {\n" +
        "        console.log('Das Auto fährt.');\n" +
        "    }\n" +
        "};\n" +
        "console.log(Object.values(auto));\n" +
        "// → ['BMW', 'X5', 2022]\n" +
        "```\n\n" +
        "4. Vererbte Eigenschaften:\n" +
        "```javascript\n" +
        "function Tier(art) {\n" +
        "    this.art = art;\n" +
        "}\n" +
        "Tier.prototype.bewegen = function() {\n" +
        "    console.log('Das Tier bewegt sich.');\n" +
        "};\n" +
        "const hund = new Tier('Hund');\n" +
        "console.log(Object.values(hund));\n" +
        "// → ['Hund']\n" +
        "```\n\n" +
        "5. Mit Arrays:\n" +
        "```javascript\n" +
        "const zahlen = [10, 20, 30];\n" +
        "console.log(Object.values(zahlen));\n" +
        "// → [10, 20, 30]\n" +
        "```\n\n" +
        "📌 Wichtige Hinweise:\n\n" +
        "🔹 Enthält nur eigene Werte, keine Methoden oder vererbte Eigenschaften\n" +
        "🔹 Die Reihenfolge der Werte entspricht der Reihenfolge der Schlüssel\n" +
        "🔹 Bei Arrays werden die Werte direkt zurückgegeben\n\n" +
        "📌 Anwendungsfälle:\n\n" +
        "🔹 Wenn du alle Werte eines Objekts brauchst\n" +
        "🔹 Wenn du prüfen willst, ob ein Objekt Werte enthält\n" +
        "🔹 Wenn du Werte einfach verarbeiten möchtest (z.B. summieren)\n\n" +
        "📌 Beispiel: Summe aller Werte berechnen\n" +
        "```javascript\n" +
        "const preise = { apfel: 1, banane: 2, orange: 3 };\n" +
        "const summe = Object.values(preise).reduce((acc, wert) => acc + wert, 0);\n" +
        "console.log(summe);\n" +
        "// → 6\n" +
        "```\n\n" +
        "`Object.values()` ist eine schnelle Möglichkeit, die Eigenschaftswerte eines Objekts als Array zu erhalten! 🚀",

    entries:
        "🔑 `Object.entries()` - Schlüssel-Wert-Paare eines Objekts abrufen\n\n" +
        "Die Methode `Object.entries(objekt)` gibt ein Array von Arrays zurück, wobei jedes Unter-Array ein Schlüssel-Wert-Paar des Objekts enthält.\n\n" +
        "📌 Syntax:\n" +
        "```javascript\n" +
        "Object.entries(objekt);\n" +
        "// objekt: Das Objekt, dessen Schlüssel-Wert-Paare als Array zurückgegeben werden sollen\n" +
        "```\n\n" +
        "📌 Beispiele:\n\n" +
        "1. Einfache Objekte:\n" +
        "```javascript\n" +
        "const person = { name: 'Alice', alter: 25, beruf: 'Entwickler' };\n" +
        "console.log(Object.entries(person));\n" +
        "// → [['name', 'Alice'], ['alter', 25], ['beruf', 'Entwickler']]\n" +
        "```\n\n" +
        "2. Leeres Objekt:\n" +
        "```javascript\n" +
        "console.log(Object.entries({}));\n" +
        "// → []\n" +
        "```\n\n" +
        "3. Objekte mit Methoden:\n" +
        "```javascript\n" +
        "const auto = {\n" +
        "    marke: 'BMW',\n" +
        "    modell: 'X5',\n" +
        "    baujahr: 2022,\n" +
        "    fahren: function() {\n" +
        "        console.log('Das Auto fährt.');\n" +
        "    }\n" +
        "};\n" +
        "console.log(Object.entries(auto));\n" +
        "// → [['marke', 'BMW'], ['modell', 'X5'], ['baujahr', 2022]]\n" +
        "```\n\n" +
        "4. Vererbte Eigenschaften:\n" +
        "```javascript\n" +
        "function Tier(art) {\n" +
        "    this.art = art;\n" +
        "}\n" +
        "Tier.prototype.bewegen = function() {\n" +
        "    console.log('Das Tier bewegt sich.');\n" +
        "};\n" +
        "const hund = new Tier('Hund');\n" +
        "console.log(Object.entries(hund));\n" +
        "// → [['art', 'Hund']]\n" +
        "```\n\n" +
        "5. Mit Arrays:\n" +
        "```javascript\n" +
        "const zahlen = [10, 20, 30];\n" +
        "console.log(Object.entries(zahlen));\n" +
        "// → [['0', 10], ['1', 20], ['2', 30]]\n" +
        "```\n\n" +
        "📌 Wichtige Hinweise:\n\n" +
        "🔹 Enthält nur eigene Eigenschaften, keine Methoden oder vererbte Eigenschaften\n" +
        "🔹 Jedes Unter-Array enthält [Schlüssel, Wert]\n" +
        "🔹 Bei Arrays werden die Indizes als Schlüssel genutzt\n\n" +
        "📌 Anwendungsfälle:\n\n" +
        "🔹 Wenn du Schlüssel-Wert-Paare als Array brauchst\n" +
        "🔹 Wenn du Objekte in Map-Datenstrukturen umwandeln willst\n" +
        "🔹 Wenn du ein Objekt einfach in einer Schleife durchgehen willst\n\n" +
        "📌 Beispiel: Objekt in eine Map umwandeln\n" +
        "```javascript\n" +
        "const preise = { apfel: 1, banane: 2, orange: 3 };\n" +
        "const preiseMap = new Map(Object.entries(preise));\n" +
        "console.log(preiseMap.get('banane'));\n" +
        "// → 2\n" +
        "```\n\n" +
        "`Object.entries()` ist ideal, wenn du Schlüssel-Wert-Paare als Array benötigst oder Objekte einfach durchlaufen möchtest! 🚀",

    default: "Möchtest du mehr über Objekte in JavaScript wissen?",
};
