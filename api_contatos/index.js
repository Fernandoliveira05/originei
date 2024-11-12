const express = require('express');
const db = require('./db'); // Importando o arquivo de conexão db.js

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para lidar com JSON

// Rota para adicionar um novo contato
// Rota para adicionar um novo contato
app.post('/contatos', async (req, res) => {
    const { nome, email, telefone } = req.body;
  
    try {
        const result = await db.query(
            'INSERT INTO contatos (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, telefone]
        );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error("Erro ao inserir dados no banco de dados:", err); // Detalhe do erro
      res.status(500).json({ error: 'Erro ao inserir dados no banco de dados', details: err.message });
    }
  });
  

// Rota para listar todos os contatos
app.get('/contatos', async (req, res) => {
  try {
    const contatos = await db.query('SELECT * FROM contatos');
    res.json(contatos.rows);
  } catch (err) {
    console.error("Erro ao buscar dados:", err);
    res.status(500).send('Erro no servidor');
  }
});

// Inicia o servidor apenas uma vez
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});