const banco = require('./conexao');
const LivroSchema = new banco.Schema({
  titulo: String,
  autores: [String],
  codEditora: Number,
  resumo: String,
});
module.exports = banco.model('Livro', LivroSchema, 'livros');
