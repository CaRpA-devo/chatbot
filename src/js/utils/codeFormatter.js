// Hilfsfunktion zum Markieren von Methodennamen
export function highlightMethods(code) {
    const methodNames = [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice",
        "map",
        "filter",
        "reduce",
        "forEach",
        "find",
        "findIndex",
        "some",
        "every",
        "includes",
        "sort",
        "reverse",
        "join",
        "split",
        "keys",
        "values",
        "entries",
        "assign",
        "freeze",
        "create",
        "hasOwnProperty",
    ];
    let highlightedCode = code;
    methodNames.forEach((method) => {
        // Markiere Methoden in Code-Blöcken
        const regex = new RegExp(`\\b${method}\\(`, "g");
        highlightedCode = highlightedCode.replace(
            regex,
            `<span class="method-name">${method}</span>(`
        );
        // Markiere Methoden in normalem Text
        const textRegex = new RegExp(`\\b${method}\\b`, "g");
        highlightedCode = highlightedCode.replace(
            textRegex,
            `<span class="method-name">${method}</span>`
        );
    });
    return highlightedCode;
}
