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

## 🗂️ 2. Struttura della Base Dati

Il nostro database si chiama `biblioteca` e contiene 3 collezioni (simili a tabelle Excel):

### 📁 `libri`

Contiene i libri disponibili nella biblioteca.

```json
{
  "titolo": "1984",
  "autore": "George Orwell",
  "anno_pubblicazione": 1949,
  "generi": ["Distopico", "Politico"],
  "copie_disponibili": 5
}
