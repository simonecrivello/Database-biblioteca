# Database-biblioteca

# 📚 Progetto NoSQL: Creazione Database per Applicazione Biblioteca

Questo progetto ti guida passo dopo passo nella **creazione di un database MongoDB** per gestire una **biblioteca**. È pensato per chi **non ha esperienza** con i database NoSQL.

---

## ✅ Obiettivi del progetto

Imparerai a:

- Preparare l’ambiente di lavoro
- Creare un database MongoDB chiamato `biblioteca`
- Definire e comprendere la struttura dei dati
- Caricare i dati nel database tramite uno script

---

## 🛠️ 1. Setup dell’ambiente

Hai due opzioni:

### 🔹 A. Ambiente locale (sul tuo computer)

1. Installa MongoDB:
   👉 https://www.mongodb.com/try/download/community

2. (Facoltativo) Installa **MongoDB Compass**, una comoda interfaccia grafica:
   👉 https://www.mongodb.com/try/download/compass

3. Avvia il server MongoDB (di solito si avvia automaticamente dopo l’installazione).

---

### 🔹 B. Ambiente Cloud (consigliato per principianti)

1. Vai su https://www.mongodb.com/cloud/atlas
2. Crea un account gratuito
3. Crea un nuovo **cluster gratuito**
4. Crea un database chiamato `biblioteca`
5. Carica i dati tramite MongoDB Compass oppure uno script

---

## 🗄️ Struttura del database `biblioteca`

Il database `biblioteca` è composto da **tre collezioni principali**, ognuna con un ruolo specifico:

---

### 📁 1. `libri`

Contiene le informazioni sui libri disponibili in biblioteca.

| Campo               | Tipo         | Descrizione                                       |
|---------------------|--------------|---------------------------------------------------|
| `titolo`            | stringa      | Titolo del libro                                  |
| `autore`            | stringa      | Nome dell’autore                                  |
| `anno_pubblicazione`| numero       | Anno in cui il libro è stato pubblicato           |
| `generi`            | array        | Elenco dei generi a cui appartiene il libro       |
| `copie_disponibili` | numero       | Numero di copie disponibili per il prestito       |

---

### 📁 2. `utenti`

Contiene i dati degli utenti iscritti alla biblioteca.

| Campo              | Tipo    | Descrizione                                        |
|--------------------|---------|----------------------------------------------------|
| `nome`             | stringa | Nome completo dell’utente                          |
| `email`            | stringa | Indirizzo email dell’utente                        |
| `data_iscrizione`  | data    | Data in cui l’utente si è iscritto alla biblioteca |
| `attivo`           | boolean | Indica se l’utente è attualmente attivo            |

---

### 📁 3. `prestiti`

Registra ogni prestito effettuato da un utente.

| Campo             | Tipo      | Descrizione                                       |
|-------------------|-----------|---------------------------------------------------|
| `id_utente`       | ObjectId  | Riferimento all’utente che ha preso il libro     |
| `id_libro`        | ObjectId  | Riferimento al libro preso in prestito           |
| `data_prestito`   | data      | Data in cui il prestito è stato effettuato       |
| `data_scadenza`   | data      | Data entro cui il libro va restituito            |
| `restituito`      | boolean   | Indica se il libro è stato restituito o meno     |

> 🔗 Le relazioni tra utenti e libri vengono gestite tramite gli **ObjectId**, che collegano i documenti tra collezioni.
