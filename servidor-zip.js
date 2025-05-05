const express = require('express');
const path = require('path');
const app = express();

const PORT = 8081;

app.get('/controle-estoque.zip', (req, res) => {
  const filePath = path.join(__dirname, 'controle-estoque-vps-adminer.zip');
  res.download(filePath);
});

app.listen(PORT, () => {
  console.log(`Servidor de arquivos rodando em http://localhost:${PORT}/controle-estoque.zip`);
});