const db = connect("mongodb://localhost:27017/biblioteca");

// Pulizia collezioni esistenti
db.autori.drop();
db.utenti.drop();
db.libri.drop();
db.prestiti.drop();

// Inserimento autori
db.autori.insertMany([
  { nome: "Mario Rossi", ruolo: "Progettazione database", email: "mariorossi@example.com" },
  { nome: "Luca Bianchi", ruolo: "Documentazione", email: "lucabianchi@example.com" },
  { nome: "Sara Verdi", ruolo: "Setup ambiente", email: "saraverdi@example.com" }
]);

// Inserimento utenti
const utenti = db.utenti.insertMany([
  { nome: "Giulia Conti", email: "giulia.conti@example.com", data_iscrizione: new Date("2024-01-15"), attivo: true },
  { nome: "Marco Neri", email: "marco.neri@example.com", data_iscrizione: new Date("2023-11-20"), attivo: true }
]);

// Inserimento libri
const libri = db.libri.insertMany([
  { titolo: "Il nome della rosa", autore: "Umberto Eco", anno_pubblicazione: 1980, generi: ["Storico", "Giallo"], copie_disponibili: 3 },
  { titolo: "1984", autore: "George Orwell", anno_pubblicazione: 1949, generi: ["Distopico"], copie_disponibili: 5 }
]);

// Inserimento prestiti
db.prestiti.insertMany([
  {
    id_utente: utenti.insertedIds["0"],
    id_libro: libri.insertedIds["0"],
    data_prestito: new Date("2025-06-01"),
    data_scadenza: new Date("2025-06-21"),
    restituito: false
  }
]);

print("✅ Dati caricati nel database 'biblioteca'");
