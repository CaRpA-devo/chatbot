export const loopAnswers = {
    loops:
        "📌 Welche Schleifen sollte ein Entwickler häufig verwenden?\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Schleife</th><th>Verwendung</th><th>Häufigkeit</th></tr>" +
        "<tr><td><code>for</code></td><td>Wenn du den Index und eine bestimmte Anzahl an Iterationen benötigst</td><td>Sehr häufig</td></tr>" +
        "<tr><td><code>for...of</code></td><td>Wenn du nur die Elemente eines Arrays oder iterierbaren Objekts benötigst</td><td>Sehr häufig</td></tr>" +
        "<tr><td><code>forEach()</code></td><td>Wenn du eine funktionale Iteration über jedes Array-Element durchführen möchtest</td><td>Sehr häufig</td></tr>" +
        "<tr><td><code>while</code></td><td>Wenn du mit unbestimmten Bedingungen arbeiten musst</td><td>Häufig</td></tr>" +
        "<tr><td><code>for...in</code></td><td>Wird in der Regel für Objekte verwendet, aber weniger für Arrays</td><td>Selten</td></tr>" +
        "<tr><td><code>do...while</code></td><td>Wenn der Codeblock immer mindestens einmal ausgeführt werden muss</td><td>Sehr selten</td></tr>" +
        "</table>\n\n" +
        "📌 Fazit:\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Anwendungsfall</th><th>Empfohlene Schleife</th></tr>" +
        "<tr><td>Arrays</td><td><code>for...of</code>, <code>forEach()</code></td></tr>" +
        "<tr><td>Objekte</td><td><code>for...in</code></td></tr>" +
        "<tr><td>Klassische Schleifen mit Zählvariablen</td><td><code>for</code>, <code>while</code></td></tr>" +
        "<tr><td>Spezielle Bedingungen</td><td><code>do...while</code></td></tr>" +
        "</table>\n\n" +
        "Diese Methoden sind die häufigsten und am nützlichsten für Entwickler. Es ist wichtig, dass du die richtige Schleife für deinen jeweiligen Anwendungsfall auswählst! 👨‍💻👩‍💻",
    arrayloop:
        "1. `for...of` Schleife\n" +
        "Iteriert über Werte der Array-Elemente.\n\n" +
        "🔹 Flexibel: Kann mit `break`, `continue` und `return` genutzt werden.\n" +
        "🔹 Asynchron: Unterstützt `async/await` für asynchrone Operationen.\n\n" +
        "Beispiel:\n" +
        "```javascript\n" +
        "const zahlen = [1, 2, 3];\n" +
        "for (const zahl of zahlen) {\n" +
        "    console.log(zahl);  // Gibt 1, 2, 3 aus\n" +
        "}\n" +
        "```\n\n" +
        "2. `forEach()` Methode\n" +
        "Iteriert über Werte der Array-Elemente.\n\n" +
        "🔹 Kein Abbruch: Kann nicht mit `break` oder `return` gestoppt werden.\n" +
        "🔹 Nicht asynchron: Kann nicht direkt mit `async/await` verwendet werden.\n\n" +
        "Beispiel:\n" +
        "```javascript\n" +
        "const zahlen = [1, 2, 3];\n" +
        "zahlen.forEach(zahl => {\n" +
        "    console.log(zahl);  // Gibt 1, 2, 3 aus\n" +
        "});\n" +
        "```\n\n" +
        "📌 Vergleich:\n\n" +
        "🔹 Iteriert über: Beide über Werte\n" +
        "🔹 Abbruch der Schleife: `for...of` ja, `forEach()` nein\n" +
        "🔹 Asynchrone Operationen: `for...of` ja, `forEach()` nein\n" +
        "🔹 Verwendbarkeit: `for...of` auch mit anderen iterierbaren Objekten, `forEach()` nur für Arrays\n\n" +
        "📌 Fazit:\n" +
        "- `for...of` ist flexibler und besser geeignet für komplexe oder asynchrone Logik.\n" +
        "- `forEach()` ist einfacher und lesbarer, wenn du keine besonderen Anforderungen wie Abbruch oder Asynchronität hast.",
    objectloop:
        "`for...in` Schleife\n" +
        "Iteriert über die Schlüssel (Eigenschaften) eines Objekts.\n\n" +
        "🔹 Flexibel: Kann mit `break`, `continue` und `return` genutzt werden.\n\n" +
        "Beispiel:\n" +
        "```javascript\n" +
        "const person = {\n" +
        "    name: 'Carpa',\n" +
        "    alter: 25,\n" +
        "    beruf: 'Entwickler'\n" +
        "};\n\n" +
        "for (const key in person) {\n" +
        "    console.log(key, person[key]);  // Gibt aus: name Carpa, alter 25, beruf Entwickler\n" +
        "}\n" +
        "```\n\n" +
        "📌 Vergleich mit `for...of` (Arrays):\n\n" +
        "🔹 Iteriert über: `for...in` über Schlüssel (Eigenschaften), `for...of` über Werte\n" +
        "🔹 Abbruch der Schleife: Beide ja, mit `break`/`return` bzw. `break`/`continue`\n" +
        "🔹 Verwendbarkeit: `for...in` nur für Objekte, `for...of` nur für Arrays\n\n" +
        "📌 Wichtige Hinweise:\n\n" +
        "🔹 Verwendung: `for...in` ist speziell für Objekte gedacht, um deren Schlüssel zu durchlaufen. Du bekommst die Schlüssel und kannst mit `obj[key]` auf die Werte zugreifen.\n\n" +
        "🔹 Nicht für Arrays empfohlen: Die `for...in` Schleife kann in Arrays unerwartete Ergebnisse liefern, da sie auch geerbte Eigenschaften von Prototypen durchläuft. Für Arrays ist `for...of` besser geeignet.",
    klassischeloops:
        "1. `for` Schleife\n" +
        "Verwendung: Wird häufig verwendet, wenn du weißt, wie oft du eine Schleife durchlaufen möchtest.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "for (initialisierung; bedingung; iteration) {\n" +
        "    // Code, der ausgeführt wird\n" +
        "}\n" +
        "```\n\n" +
        "Beispiel: Iteration über Zahlen von 0 bis 4.\n" +
        "```javascript\n" +
        "for (let i = 0; i < 5; i++) {\n" +
        "    console.log(i); // Gibt 0, 1, 2, 3, 4 aus\n" +
        "}\n" +
        "```\n\n" +
        "2. `while` Schleife\n" +
        "Verwendung: Wird verwendet, wenn die Anzahl der Durchläufe nicht im Voraus bekannt ist und du die Schleife so lange ausführen möchtest, wie eine Bedingung wahr bleibt.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "while (bedingung) {\n" +
        "    // Code, der ausgeführt wird\n" +
        "}\n" +
        "```\n\n" +
        "Beispiel: Solange i kleiner als 5 ist, wird die Schleife ausgeführt.\n" +
        "```javascript\n" +
        "let i = 0;\n" +
        "while (i < 5) {\n" +
        "    console.log(i); // Gibt 0, 1, 2, 3, 4 aus\n" +
        "    i++;\n" +
        "}\n" +
        "```\n\n" +
        "📌 Unterschiede:\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Eigenschaft</th><th>for Schleife</th><th>while Schleife</th></tr>" +
        "<tr><td>Verwendung</td><td>Wenn Anzahl der Iterationen bekannt</td><td>Wenn Bedingung unbekannt ist</td></tr>" +
        "<tr><td>Struktur</td><td>Initialisierung, Bedingung, Iteration</td><td>Nur Bedingung</td></tr>" +
        "<tr><td>Einsatzgebiet</td><td>Gängig bei festen Wiederholungen</td><td>Besser bei unbekannter Wiederholungsanzahl</td></tr>" +
        "</table>\n\n" +
        "📌 Wichtige Hinweise:\n\n" +
        "🔹 `for`: Wird häufig genutzt, wenn du eine feste Anzahl von Iterationen benötigst.\n\n" +
        "🔹 `while`: Wird verwendet, wenn du eine Schleife so lange ausführen möchtest, bis eine bestimmte Bedingung nicht mehr zutrifft. Achte darauf, die Bedingung irgendwann zu ändern, sonst wird die Schleife unendlich oft durchlaufen.",
    spezielleloops:
        "`do...while` Schleife\n" +
        "Verwendung: Wird verwendet, wenn du sicherstellen möchtest, dass der Code mindestens einmal ausgeführt wird, bevor die Bedingung überprüft wird.\n\n" +
        "Syntax:\n" +
        "```javascript\n" +
        "do {\n" +
        "    // Code, der ausgeführt wird\n" +
        "} while (bedingung);\n" +
        "```\n\n" +
        "Beispiel: Zeigt Zahlen von 0 bis 4 an.\n" +
        "```javascript\n" +
        "let i = 0;\n" +
        "do {\n" +
        "    console.log(i); // Gibt 0, 1, 2, 3, 4 aus\n" +
        "    i++;\n" +
        "} while (i < 5);\n" +
        "```\n\n" +
        "📌 Unterschiede zur `while` Schleife:\n\n" +
        "<table class='method-table'>" +
        "<tr><th>Eigenschaft</th><th>do...while Schleife</th><th>while Schleife</th></tr>" +
        "<tr><td>Bedingung</td><td>Bedingung wird nach dem Block überprüft</td><td>Bedingung wird vor dem Block überprüft</td></tr>" +
        "<tr><td>Durchläufe garantiert</td><td>Code wird mindestens einmal ausgeführt</td><td>Code wird nur bei wahrer Bedingung ausgeführt</td></tr>" +
        "<tr><td>Einsatzgebiet</td><td>Wenn der Code mindestens einmal laufen muss, z.B. bei Benutzereingaben</td><td>Wenn die Bedingung vor dem ersten Durchlauf geprüft wird</td></tr>" +
        "</table>\n\n" +
        "📌 Wichtige Hinweise:\n\n" +
        "🔹 `do...while`: Der Code wird mindestens einmal ausgeführt, selbst wenn die Bedingung zu Beginn false ist.\n\n" +
        "🔹 `while`: Der Code wird nur ausgeführt, wenn die Bedingung zu Beginn true ist.",
    default:
        "Achte auf deine eingabe, ansonsten schaue in die Legende für die KEYS!",
};
