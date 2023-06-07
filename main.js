
import { analyzeText, analyzeTextAusDatei, convertAndSaveMarkdown } from './functions';
import readlineSync from 'readline-sync';
import fs from 'fs';


const options = ['Text analyzieren', 'Markdown zu Html'];
const index = readlineSync.keyInSelect(options, 'Was möchten Sie tun?');
if (index === 0) {
const options = ['Text eingeben', 'Datei aufrufen'];
const index = readlineSync.keyInSelect(options, 'Was möchten Sie tun?');

if (index === 0) {
  analyzeText();
} else if (index === 1) {
  let filePath = readlineSync.question('Bitte geben Sie den Pfad zur Datei ein: ');
  try {
    let data = fs.readFileSync(filePath, 'utf8');
    console.log('Der Inhalt der Datei ist:', data);
    analyzeTextAusDatei(data);
  } catch (error) {
    console.error('Fehler beim Lesen der Datei', error);
  }
} else {
  console.log('Abgebrochen');
}
}else if (index === 1){
    convertAndSaveMarkdown()
}






