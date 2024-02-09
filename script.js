/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  String: sono una sequenza di caratteri, posso comporre parole, testi, e sono racchiusi tra apici, ad esempio let string = "questa è una stringa"

    Boolean: ha solo due valori, true & false, di solito si utilizza per confrontare due o più valori. 
    ad esempio abbiamo due variabili "let x = 5" e "let y = 7" apriamo un "console.log" e chiediamo,
    console.log(x > y); in questo caso abbiamo chiesto se "x(5)" è maggiore di "y(7), quindi quello è uscira sarà sicuramente "false".

    Undefined & null: per le variabili che non hanno un valore, "null" per quelle che dichiariamo noi nulle vuote, "undefined" per quelle alla quale non diamo nessun valore, quindi non sappiamo qual'è, è appunto undefined.

    BigInt: viene utilizzato per i numeri eccessivamente grandi che superano il limite per il tipo "number"
*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* Un oggetto lo possiamo considerare come un contenitore di proprietà, una coppia chiave-valore, da elementi che hanno una chiave (stringa,nome), ed un valore.
    lo possiamo immaginare come un archivio di dati, e ogni dato viene archiviato utilizzando uno specifica "chiave", così facendo, conoscendo la chiave potrà essere facilmente reperibile.
    di seguito un esempio di oggetto, utilizzato come richiesto nella domanda 6 bis.

    let obj = {
    nome : "Michele",
    cognome : "Altieri",
    hobby : "palestra, calcio, musica",
    
*/
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let z = 12;
let y = 20;
let zy = ( y + z );
console.log (zy)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name = "michele";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;
console.log( sottrazione );

/* ESERCIZIO 6 BIS /*
/* Crea un oggetto di javascript che ti rappresenti ( come proprietà usa nome, cognome, hobby) */

let obj = {
    nome : "Michele",
    cognome : "Altieri",
    hobby : "palestra, calcio, musica",
}
console.table(obj)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
/* SCRIVI QUI LA TUA RISPOSTA */

name1 = "john";
name2 = "John";

console.log( name1 == name2 )
console.log( name1 == name2.toLowerCase())