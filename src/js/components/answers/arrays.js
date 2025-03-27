export const arrayAnswers = {
    arraymethoden:
        "🚀 Must-Have Methoden für Entwickler\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Kategorie</th><th>Methoden</th></tr>" +
        "<tr><td>Daten ändern</td><td><code>push()</code>, <code>pop()</code>, <code>shift()</code>, <code>unshift()</code>, <code>splice()</code></td></tr>" +
        "<tr><td>Neue Arrays erstellen</td><td><code>map()</code>, <code>filter()</code>, <code>reduce()</code></td></tr>" +
        "<tr><td>Daten suchen</td><td><code>find()</code>, <code>findIndex()</code>, <code>some()</code>, <code>every()</code>, <code>includes()</code></td></tr>" +
        "<tr><td>Iterieren</td><td><code>forEach()</code></td></tr>" +
        "<tr><td>Sortierung & Transformation</td><td><code>sort()</code>, <code>reverse()</code>, <code>join()</code>, <code>split()</code></td></tr>" +
        "</table>\n\n" +
        "Diese Methoden solltest du perfekt beherrschen, um in der Entwicklung effizient zu arbeiten. 🚀",
    "daten aendern":
        "🔟 Array Methoden zum Ändern von Daten\n\n" +
        "1. <code>push()</code> – Am Ende hinzufügen\n" +
        "Die push()-Methode fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\narray.push(element1, element2, ...);\n```\n\n" +
        "Beispiel:\n" +
        "```javascript\nlet zahlen = [1, 2, 3];\nlet neueLaenge = zahlen.push(4, 5); // Fügt 4 und 5 am Ende hinzu\n\nconsole.log(zahlen); // [1, 2, 3, 4, 5]\nconsole.log(neueLaenge); // 5 (neue Länge des Arrays)\n```\n\n" +
        "🔹 Wichtig: push() verändert das ursprüngliche Array!\n\n" +
        "2. <code>pop()</code> – Letztes Element entfernen\n" +
        "Die pop()-Methode entfernt das letzte Element aus einem Array und gibt dieses entfernte Element zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\nlet entferntesElement = array.pop();\n```\n\n" +
        "Beispiel:\n" +
        "```javascript\nlet namen = ['Alice', 'Bob', 'Charlie'];\nlet entfernt = namen.pop(); // Entfernt 'Charlie'\n\nconsole.log(namen); // ['Alice', 'Bob']\nconsole.log(entfernt); // 'Charlie'\n```\n\n" +
        "🔹 Wichtig: pop() verändert das ursprüngliche Array!\n\n" +
        "3. <code>shift()</code> – Erstes Element entfernen\n" +
        "Die shift()-Methode entfernt das erste Element eines Arrays und gibt es zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\nlet entferntesElement = array.shift();\n```\n\n" +
        "Beispiel:\n" +
        "```javascript\nlet farben = ['Rot', 'Blau', 'Grün'];\nlet entfernt = farben.shift(); // Entfernt 'Rot'\n\nconsole.log(farben); // ['Blau', 'Grün']\nconsole.log(entfernt); // 'Rot'\n```\n\n" +
        "🔹 Wichtig: shift() verändert das ursprüngliche Array!\n\n" +
        "4. <code>unshift()</code> – Am Anfang hinzufügen\n" +
        "Die unshift()-Methode fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\narray.unshift(element1, element2, ...);\n```\n\n" +
        "Beispiel:\n" +
        "```javascript\nlet tiere = ['Katze', 'Hund'];\nlet neueLaenge = tiere.unshift('Elefant', 'Löwe'); // Fügt 'Elefant' und 'Löwe' vorne hinzu\n\nconsole.log(tiere); // ['Elefant', 'Löwe', 'Katze', 'Hund']\nconsole.log(neueLaenge); // 4 (neue Länge des Arrays)\n```\n\n" +
        "🔹 Wichtig: unshift() verändert das ursprüngliche Array!\n\n" +
        "5. <code>splice()</code> – Elemente entfernen, hinzufügen oder ersetzen\n" +
        "Die splice()-Methode kann:\n\n" +
        "• Elemente aus dem Array entfernen\n" +
        "• Neue Elemente an einer bestimmten Stelle hinzufügen\n" +
        "• Elemente durch neue ersetzen\n\n" +
        "Syntax:\n" +
        "```javascript\narray.splice(startIndex, anzahlZuEntfernen, element1, element2, ...);\n```\n\n" +
        "Beispiel 1: Elemente entfernen\n" +
        "```javascript\nlet zahlen = [0, 1, 2, 3, 4, 5];\nzahlen.splice(2, 2); // Entfernt ab Index 2 zwei Elemente (2 und 3)\n\nconsole.log(zahlen); // [0, 1, 4, 5]\n```\n\n" +
        "Beispiel 2: Elemente hinzufügen\n" +
        "```javascript\nlet zahlen = [1, 2, 5, 6];\nzahlen.splice(2, 0, 3, 4); // Fügt '3' und '4' an Index 2 ein\n\nconsole.log(zahlen); // [1, 2, 3, 4, 5, 6]\n```\n\n" +
        "Beispiel 3: Elemente ersetzen\n" +
        "```javascript\nlet zahlen = [1, 2, 99, 4, 5];\nzahlen.splice(2, 1, 3); // Ersetzt die Zahl 99 (Index 2) durch 3\n\nconsole.log(zahlen); // [1, 2, 3, 4, 5]\n```",
    "neues array":
        "1. `map()` – Neues Array durch Transformation erstellen\n" +
        "Die `map()`-Methode erstellt ein neues Array, indem sie eine Funktion auf jedes Element des ursprünglichen Arrays anwendet.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let neuesArray = array.map(callback);\n" +
        "// callback: Eine Funktion, die auf jedes Element angewendet wird\n" +
        "```\n\n" +
        "Beispiel 1: Jedes Element verdoppeln\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3, 4];\n" +
        "let verdoppelt = zahlen.map(num => num * 2);\n" +
        "console.log(verdoppelt); // [2, 4, 6, 8]\n" +
        "```\n\n" +
        "Beispiel 2: Ein Array aus Objekten umformen\n" +
        "```javascript\n" +
        "let personen = [\n" +
        "  { name: 'Alice', alter: 25 },\n" +
        "  { name: 'Bob', alter: 30 }\n" +
        "];\n" +
        "let namen = personen.map(person => person.name);\n" +
        "console.log(namen); // ['Alice', 'Bob']\n" +
        "```\n\n" +
        "2. `filter()` – Neues Array mit gefilterten Werten erstellen\n" +
        "Die `filter()`-Methode erstellt ein neues Array mit Elementen, die eine Bedingung erfüllen.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let neuesArray = array.filter(callback);\n" +
        "// callback: Eine Funktion, die für jedes Element true oder false zurückgibt\n" +
        "```\n\n" +
        "Beispiel 1: Gerade Zahlen filtern\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3, 4, 5, 6];\n" +
        "let geradeZahlen = zahlen.filter(num => num % 2 === 0);\n" +
        "console.log(geradeZahlen); // [2, 4, 6]\n" +
        "```\n\n" +
        "Beispiel 2: Personen über 25 filtern\n" +
        "```javascript\n" +
        "let personen = [\n" +
        "  { name: 'Alice', alter: 25 },\n" +
        "  { name: 'Bob', alter: 30 },\n" +
        "  { name: 'Charlie', alter: 20 }\n" +
        "];\n" +
        "let erwachsene = personen.filter(person => person.alter > 25);\n" +
        "console.log(erwachsene); // [{ name: 'Bob', alter: 30 }]\n" +
        "```\n\n" +
        "3. `reduce()` – Ein einzelnes Ergebnis aus einem Array berechnen\n" +
        "Die `reduce()`-Methode reduziert ein Array auf einen einzelnen Wert (z. B. eine Summe oder ein Objekt).\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let ergebnis = array.reduce(callback, startwert);\n" +
        "// callback: Eine Funktion, die zwei Werte verarbeitet:\n" +
        "// - accumulator: Der Wert, der über Iterationen hinweg gespeichert wird\n" +
        "// - aktuellesElement: Das aktuelle Element aus dem Array\n" +
        "```\n\n" +
        "Beispiel 1: Summe aller Zahlen\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3, 4, 5];\n" +
        "let summe = zahlen.reduce((acc, num) => acc + num, 0);\n" +
        "console.log(summe); // 15\n" +
        "```\n\n" +
        "🔹 Wie funktioniert es?\n\n" +
        "acc = 0 (Startwert), num = 1 → acc + num = 1\n\n" +
        "acc = 1, num = 2 → acc + num = 3\n\n" +
        "acc = 3, num = 3 → acc + num = 6\n\n" +
        "acc = 6, num = 4 → acc + num = 10\n\n" +
        "acc = 10, num = 5 → acc + num = 15\n\n" +
        "Beispiel 2: Maximale Zahl finden\n" +
        "```javascript\n" +
        "let zahlen = [5, 12, 8, 130, 44];\n" +
        "let maximum = zahlen.reduce((max, num) => num > max ? num : max, zahlen[0]);\n" +
        "console.log(maximum); // 130\n" +
        "```\n\n" +
        "Beispiel 3: Objekte zu einem einzigen Objekt zusammenfassen\n" +
        "```javascript\n" +
        "let einkaufsliste = [\n" +
        "  { produkt: 'Apfel', menge: 2 },\n" +
        "  { produkt: 'Banane', menge: 3 },\n" +
        "  { produkt: 'Apfel', menge: 1 }\n" +
        "];\n" +
        "let zusammenfassung = einkaufsliste.reduce((acc, item) => {\n" +
        "  acc[item.produkt] = (acc[item.produkt] || 0) + item.menge;\n" +
        "  return acc;\n" +
        "}, {});\n" +
        "console.log(zusammenfassung); // { Apfel: 3, Banane: 3 }\n" +
        "```",
    "daten suchen":
        "1. `find()` – Erstes passendes Element suchen\n" +
        "Die `find()`-Methode gibt das erste Element zurück, das eine bestimmte Bedingung erfüllt. Falls kein Element passt, gibt sie undefined zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let ergebnis = array.find(callback);\n" +
        "// callback: Eine Funktion, die für jedes Element true oder false zurückgibt\n" +
        "```\n\n" +
        "Beispiel: Eine Person über 30 finden\n" +
        "```javascript\n" +
        "let personen = [\n" +
        "  { name: 'Alice', alter: 25 },\n" +
        "  { name: 'Bob', alter: 35 },\n" +
        "  { name: 'Charlie', alter: 40 }\n" +
        "];\n" +
        "let aelterAls30 = personen.find(person => person.alter > 30);\n" +
        "console.log(aelterAls30); // { name: 'Bob', alter: 35 }\n" +
        "```\n\n" +
        "2. `findIndex()` – Index eines passenden Elements finden\n" +
        "Die `findIndex()`-Methode gibt den Index des ersten Elements zurück, das eine Bedingung erfüllt. Falls kein Element passt, gibt sie -1 zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let index = array.findIndex(callback);\n" +
        "```\n\n" +
        "Beispiel: Index der ersten Zahl größer als 10\n" +
        "```javascript\n" +
        "let zahlen = [2, 8, 15, 22];\n" +
        "let index = zahlen.findIndex(num => num > 10);\n" +
        "console.log(index); // 2 (Index von 15)\n" +
        "```\n\n" +
        "3. `some()` – Prüfen, ob mindestens ein Element passt\n" +
        "Die `some()`-Methode überprüft, ob mindestens ein Element die Bedingung erfüllt. Sie gibt true oder false zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let ergebnis = array.some(callback);\n" +
        "```\n\n" +
        "Beispiel: Gibt es eine gerade Zahl?\n" +
        "```javascript\n" +
        "let zahlen = [1, 3, 5, 8];\n" +
        "let hatGeradeZahl = zahlen.some(num => num % 2 === 0);\n" +
        "console.log(hatGeradeZahl); // true (weil 8 gerade ist)\n" +
        "```\n\n" +
        "4. `every()` – Prüfen, ob alle Elemente passen\n" +
        "Die `every()`-Methode überprüft, ob alle Elemente die Bedingung erfüllen. Falls ein einziges Element nicht passt, gibt sie false zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let ergebnis = array.every(callback);\n" +
        "```\n\n" +
        "Beispiel: Sind alle Zahlen positiv?\n" +
        "```javascript\n" +
        "let zahlen = [2, 5, 8, -1];\n" +
        "let allePositiv = zahlen.every(num => num > 0);\n" +
        "console.log(allePositiv); // false (weil -1 negativ ist)\n" +
        "```\n\n" +
        "5. `includes()` – Prüfen, ob ein Wert im Array enthalten ist\n" +
        "Die `includes()`-Methode überprüft, ob ein bestimmter Wert im Array genau so enthalten ist. Sie gibt true oder false zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let ergebnis = array.includes(wert);\n" +
        "```\n\n" +
        "Beispiel: Enthält das Array die Zahl 3?\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3, 4, 5];\n" +
        "console.log(zahlen.includes(3)); // true\n" +
        "console.log(zahlen.includes(10)); // false\n" +
        "```\n\n" +
        "🔹 Wichtig: `includes()` funktioniert nur mit primitiven Werten (string, number, boolean), nicht mit Objekten!\n\n" +
        "Beispiel mit Objekten:\n" +
        "```javascript\n" +
        "let personen = [{ name: 'Alice' }, { name: 'Bob' }];\n" +
        "console.log(personen.includes({ name: 'Alice' })); // false\n" +
        "```",
    iterieren:
        "`forEach()` – Über ein Array iterieren\n" +
        "Die `forEach()`-Methode wird verwendet, um über jedes Element eines Arrays zu iterieren und eine Funktion darauf anzuwenden. Anders als `map()` gibt sie kein neues Array zurück, sondern führt einfach Code für jedes Element aus.\n\n" +
        "📌 Syntax:\n" +
        "```javascript\n" +
        "array.forEach(callback);\n" +
        "// callback: Eine Funktion, die für jedes Element des Arrays ausgeführt wird\n" +
        "```\n\n" +
        "Diese Funktion kann bis zu drei Parameter haben:\n\n" +
        "• element → Das aktuelle Element\n" +
        "• index (optional) → Der Index des Elements\n" +
        "• array (optional) → Das gesamte Array\n\n" +
        "📝 Beispiel 1: Jedes Element ausgeben\n" +
        "```javascript\n" +
        "let namen = ['Alice', 'Bob', 'Charlie'];\n" +
        "namen.forEach(name => console.log(name));\n" +
        "// Ausgabe:\n" +
        "// Alice\n" +
        "// Bob\n" +
        "// Charlie\n" +
        "```\n\n" +
        "📝 Beispiel 2: Elemente mit Index ausgeben\n" +
        "```javascript\n" +
        "let zahlen = [10, 20, 30];\n" +
        "zahlen.forEach((zahl, index) => {\n" +
        "  console.log(`Index ${index}: ${zahl}`);\n" +
        "});\n" +
        "// Ausgabe:\n" +
        "// Index 0: 10\n" +
        "// Index 1: 20\n" +
        "// Index 2: 30\n" +
        "```\n\n" +
        "📝 Beispiel 3: Werte in ein anderes Array schreiben\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3];\n" +
        "let verdoppelt = [];\n" +
        "zahlen.forEach(num => verdoppelt.push(num * 2));\n" +
        "console.log(verdoppelt); // [2, 4, 6]\n" +
        "```\n\n" +
        "🛑 `forEach()` vs. `map()`\n\n" +
        "• `forEach()` verändert das Original-Array nicht, sondern führt einfach Code aus.\n" +
        "• `map()` gibt ein neues Array zurück.\n\n" +
        "Beispiel zum Vergleich:\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3];\n" +
        "let ergebnisMap = zahlen.map(num => num * 2);\n" +
        "console.log(ergebnisMap); // [2, 4, 6]\n" +
        "let ergebnisForEach = [];\n" +
        "zahlen.forEach(num => ergebnisForEach.push(num * 2));\n" +
        "console.log(ergebnisForEach); // [2, 4, 6]\n" +
        "```",
    sortieren:
        "1. `sort()` – Array sortieren\n" +
        "Die `sort()`-Methode sortiert die Elemente eines Arrays in place (d.h. direkt im Original-Array) und gibt das sortierte Array zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "array.sort([callback]);\n" +
        "// callback (optional): Eine Funktion, die bestimmt, wie die Elemente verglichen werden\n" +
        "```\n\n" +
        "Beispiel 1: Zahlen aufsteigend sortieren\n" +
        "```javascript\n" +
        "let zahlen = [5, 2, 8, 1, 4];\n" +
        "zahlen.sort((a, b) => a - b);\n" +
        "console.log(zahlen); // [1, 2, 4, 5, 8]\n" +
        "```\n\n" +
        "🔹 Hinweis: Ohne einen Vergleichs-Callback wird das Array als String sortiert, was zu unerwarteten Ergebnissen führen kann.\n\n" +
        "Beispiel 2: Strings alphabetisch sortieren\n" +
        "```javascript\n" +
        "let namen = ['Alice', 'Ben', 'Clara', 'Anna'];\n" +
        "namen.sort();\n" +
        "console.log(namen); // ['Alice', 'Anna', 'Ben', 'Clara']\n" +
        "```\n\n" +
        "2. `reverse()` – Array umkehren\n" +
        "Die `reverse()`-Methode kehrt die Reihenfolge der Elemente im Array um.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "array.reverse();\n" +
        "```\n\n" +
        "Beispiel 1: Array umkehren\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3, 4, 5];\n" +
        "zahlen.reverse();\n" +
        "console.log(zahlen); // [5, 4, 3, 2, 1]\n" +
        "```\n\n" +
        "3. `join()` – Array zu einem String zusammenfügen\n" +
        "Die `join()`-Methode fügt alle Elemente eines Arrays zu einem einzelnen String zusammen.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let string = array.join([separator]);\n" +
        "// separator (optional): Ein Trennzeichen zwischen den Elementen, standardmäßig ist es ein Komma (,)\n" +
        "```\n\n" +
        "Beispiel 1: Array zu einem String ohne Trennzeichen\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3, 4];\n" +
        "let ergebnis = zahlen.join('');\n" +
        "console.log(ergebnis); // '1234'\n" +
        "```\n\n" +
        "Beispiel 2: Array zu einem String mit Trennzeichen\n" +
        "```javascript\n" +
        "let zahlen = [1, 2, 3, 4];\n" +
        "let ergebnis = zahlen.join('-')\n" +
        "console.log(ergebnis); // '1-2-3-4'\n" +
        "```\n\n" +
        "4. `split()` – String in ein Array aufteilen\n" +
        "Die `split()`-Methode teilt einen String an einem angegebenen Trennzeichen und gibt ein Array der Teile zurück.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "let array = string.split(separator);\n" +
        "// separator: Das Trennzeichen, an dem der String geteilt wird\n" +
        "// Wenn kein Trennzeichen angegeben ist, wird der gesamte String in einzelne Zeichen aufgeteilt\n" +
        "```\n\n" +
        "Beispiel 1: String in Array aufteilen\n" +
        "```javascript\n" +
        "let text = 'Hallo, wie geht's?';\n" +
        "let array = text.split(' '); // Teilt den String an den Leerzeichen\n" +
        "console.log(array); // ['Hallo,', 'wie', 'geht's?']\n" +
        "```\n\n" +
        "Beispiel 2: String in Array von einzelnen Zeichen aufteilen\n" +
        "```javascript\n" +
        "let text = 'Hallo';\n" +
        "let array = text.split('');\n" +
        "console.log(array); // ['H', 'a', 'l', 'l', 'o']\n" +
        "```",
    default:
        "Achte auf deine eingabe, ansonsten schaue in die Legende für die KEYS!",
};
