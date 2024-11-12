const { Pool } = require('pg');

const pool = new Pool({
  user: 'originei_rm93_user',
  host: 'dpg-cspk1pogph6c73edhjug-a.oregon-postgres.render.com',
  database: 'originei',
  password: 'FDRkXcGbID6LRCgVMnxpTKPiWqdEzNdp',
  port: 5432,
  ssl: { rejectUnauthorized: false }  // Necessário para conexão segura com Render.com
});

// Testando a conexão
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados:', err.stack);
  }
  console.log('Conexão com o banco de dados bem-sucedida');
  release();
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
