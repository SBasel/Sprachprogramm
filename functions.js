import readlineSync from 'readline-sync';
const fs = require('fs');
const markedPackage = require('marked');
markedPackage.setOptions({
  mangle: false,
  headerIds: false
});

export function analyzeText() {
  const text = readlineSync.question('Bitte gib deinen Text ein: ');
  console.log('Du hast folgenden Text eingegeben:', text);

  function countLetters(text) {
    // Zähle die Buchstaben im Text
    const lettersRegex = /[a-zA-Z]/g;
    const lettersCount = (text.match(lettersRegex) || []).length;
    return lettersCount;
  }

  function countWords(text) {
    // Zähle die Wörter im Text
    const words = text.split(/\s+/);
    const wordsCount = words.length;
    return wordsCount;
  }

  function countNumbers(text) {
    // Zähle die Zahlen im Text
    const numbersRegex = /[0-9]/g;
    const numbersCount = (text.match(numbersRegex) || []).length;
    return numbersCount;
  }

  function countCharacters(text) {
    // Zähle die Gesamtanzahl der Zeichen im Text
    const totalCharactersCount = text.length;
    return totalCharactersCount;
  }

  const numLetters = countLetters(text);
  const numWords = countWords(text);
  const numbersCount = countNumbers(text);
  const totalCharactersCount = countCharacters(text);

  console.log('Anzahl der Buchstaben:', numLetters);
  console.log('Anzahl der Wörter:', numWords);
  console.log('Anzahl der Zahlen:', numbersCount);
  console.log('Gesamtanzahl der Zeichen:', totalCharactersCount);
}

export function analyzeTextAusDatei(text) {

  function countLetters(text) {
    // Zähle die Buchstaben im Text
    const lettersRegex = /[a-zA-Z]/g;
    const lettersCount = (text.match(lettersRegex) || []).length;
    return lettersCount;
  }

  function countWords(text) {
    // Zähle die Wörter im Text
    const words = text.split(/\s+/);
    const wordsCount = words.length;
    return wordsCount;
  }

  function countNumbers(text) {
    // Zähle die Zahlen im Text
    const numbersRegex = /[0-9]/g;
    const numbersCount = (text.match(numbersRegex) || []).length;
    return numbersCount;
  }

  function countCharacters(text) {
    // Zähle die Gesamtanzahl der Zeichen im Text
    const totalCharactersCount = text.length;
    return totalCharactersCount;
  }

  const numLetters = countLetters(text);
  const numWords = countWords(text);
  const numbersCount = countNumbers(text);
  const totalCharactersCount = countCharacters(text);

  console.log('Anzahl der Buchstaben:', numLetters);
  console.log('Anzahl der Wörter:', numWords);
  console.log('Anzahl der Zahlen:', numbersCount);
  console.log('Gesamtanzahl der Zeichen:', totalCharactersCount);
}




const markedFunc = markedPackage.marked;

export function convertAndSaveMarkdown() {
  // Frage den Benutzer nach dem Pfad zur Quelldatei
  const sourcePath = readlineSync.question('Bitte gib den Pfad zur Quelldatei ein: ');

  // Lese die Quelldatei
  const markdown = fs.readFileSync(sourcePath, 'utf8');

  // Konvertiere das Markdown in HTML
  const htmlBody = markedFunc(markdown);

  // Erstelle eine HTML-Grundstruktur und füge den konvertierten Text im body-Tag ein
  const fullHtml = `
    <!DOCTYPE html>
    <html>
    <head></head>
    <body>
      ${htmlBody}
    </body>
    </html>
  `;

  // Frage den Benutzer nach dem Pfad zur Zieldatei
  const destinationPath = readlineSync.question('Bitte gib den Pfad zur Zieldatei ein: ');

  // Schreibe das vollständige HTML in die Zieldatei
  fs.writeFileSync(destinationPath, fullHtml);

  console.log('Die Konvertierung wurde erfolgreich durchgeführt und das HTML wurde unter ' + destinationPath + ' gespeichert.');
}