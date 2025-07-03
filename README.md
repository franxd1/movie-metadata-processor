# 🎬 Movie Metadata Processor

A RESTful API built with Node.js and Express that consumes a movie metadata API, applies specific business logic transformations, and exposes the processed data through the `/filmes` route.

## 📌 Objective

This project was developed as part of a technical test for a backend internship position. The API consumes data from an external source and returns only the relevant movie information, with the following transformations:

- Calculates profit based on budget and box office values
- Selects the most relevant award based on relevance score
- Converts movie duration from minutes to seconds
- Returns the synopsis in Brazilian Portuguese (or English, or fallback)
- Extracts the IMDb rating
- Removes unnecessary fields such as `poster`, `trailer`, and `locacoes`

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/) (for development)

## 📂 Project Structure

```
src/
├── routes/
│   └── filmes.js          # Main API route
├── services/
│   └── filmesService.js   # Fetches and transforms data from the external API
├── utils/
│   ├── lucro.js           # Profit calculation
│   ├── premio.js          # Selects the highest relevance award
│   └── sinopse.js         # Synopsis selection logic
server.js                  # Initializes the Express server
.env                       # Environment variables
```

## ⚙️ Installation and Running

### 1. Clone the repository

```bash
git clone https://github.com/franxd1/movie-metadata-processor.git
cd movie-metadata-processor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the `.env` file

```env
PORT=3000
BASE_URL=https://tv5hn2gvyijpl76yxlmsy66jwa0nlmxn.lambda-url.us-east-1.on.aws
```

### 4. Start the server

```bash
# For production
npm start

# For development (with hot reload)
npm run dev
```

### 5. Access the API

Visit in browser or Postman:

```
http://localhost:3000/filmes
```

## ✅ Example Response

```json
{
  "titulo": "The Godfather",
  "ano": 1972,
  "diretor": "Francis Ford Coppola",
  "genero": ["Crime", "Drama"],
  "duracaoSegundos": 10500,
  "notaIMDb": 9.2,
  "lucro": "$1.4 billion",
  "maiorPremiacao": "Best Picture Oscar",
  "sinopse": "A mafia boss tries to transfer control of his clandestine empire to his reluctant son."
}
```

## 👤 Author

Francisco Alves Cabral  
[LinkedIn](https://www.linkedin.com/in/francisco-alves-cn)  
[GitHub Repository](https://github.com/franxd1/movie-metadata-processor)
