/**
 * 
 * @param {String} titolo 
 * @param {String} copertina 
 * @param {String} autore 
 * @param {String} trama 
 * @param {number} prezzo 
 * @param {String} personaggi 
 */
function libro(titolo, copertina, autore, trama, personaggi, prezzo){
this.titolo = titolo;
this.copertina = copertina;
this.autore = autore;
this.trama = trama;
this.personaggi = personaggi;
this.prezzo = prezzo;

}

let libri = [
   new libro("Harry Potter", "https://m.media-amazon.com/images/I/718kKmxQBWL._SY342_.jpg",
   "K.Rowling","Un maghetto che fa le magie",["Harry potter","Ron weasley","Hermione Granger"],21),
   
   new libro("Best Mak","https://m.media-amazon.com/images/I/718kKmxQBWL._SY342_.jpg",
   "K.Rowling","Un maghetto che fa le magie",["Harry potter","Ron weasley","Hermione Granger"],21),

   new libro("Va benissimo","https://m.media-amazon.com/images/I/718kKmxQBWL._SY342_.jpg",
   "K.Rowling","Un maghetto che fa le magie",["Harry potter","Ron weasley","Hermione Granger"],21),

   new libro("va bene","https://m.media-amazon.com/images/I/718kKmxQBWL._SY342_.jpg",
   "K.Rowling","Un maghetto che fa le magie",["Harry potter","Ron weasley","Hermione Granger"],21)
];

let elTitolo = document.querySelector("#elTitolo");
let elCopertina = document.querySelector("#elCopertina");
let elAutore = document.querySelector("#elAutore");
let elTrama = document.querySelector("#elTrama");
let elPrezzo = document.querySelector("#elPrezzo");
let elPersonaggi = document.querySelector("#elPersonaggi");

let btnAvanti = document.querySelector("#btnAvanti");
let btnIndietro = document.querySelector("#btnIndietro");

let contatore = 0;

function mostraLibro(indice){
 elTitolo.textContent = libri[indice].titolo;
 //per recuperare il link dell'immagine
 elCopertina.setAttribute("src", libri[indice].copertina);

 elAutore.textContent = libri[indice].autore;
 elTrama.textContent = libri[indice].trama;
 elPrezzo.textContent = libri[indice].prezzo + "$";

 //per recuperare i personaggi
elPersonaggi.innerHTML = ""; //Questo cancella la lista 

 for(let i = 0; i < libri[indice].personaggi.length; i++){
   //elPersonaggi.innerHTML += "<li>"+libri[indice].personaggi[i]+"</li>";
let li = document.createElement("li");
li.textContent = libri[indice].personaggi[i];
elPersonaggi.appendChild(li);

 }

}

//serve a mostrare il primo libro all'aperture della pagina
mostraLibro(contatore);

function vaiAvanti(){
    contatore++;
    if(contatore > libri.length - 1){
        contatore = 0;
    }
    mostraLibro(contatore);
}


function vaiIndietro(){
    contatore--;
    if(contatore < 0){
        contatore = libri.length - 1;
    }
    mostraLibro(contatore);
}

btnAvanti.onclick = vaiAvanti;
btnIndietro.onclick = vaiIndietro;
