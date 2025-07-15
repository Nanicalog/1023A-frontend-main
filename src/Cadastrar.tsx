import { useState } from 'react';
import './pagina.css';
import Header from './Header';
import './Header.css';
import ExcluirProduto from './ExcluirProduto';

export default function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (evento: React.FormEvent) => {
    evento.preventDefault();
    setMensagem('Enviando...');

    // ✅ Validação básica para evitar enviar preço inválido
    const precoConvertido = parseFloat(preco);
    if (isNaN(precoConvertido) || precoConvertido <= 0) {
      setMensagem('Por favor, insira um preço válido.');
      return;
    }

    try {
      const resposta = await fetch('http://localhost:3000/Produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          preco: precoConvertido,
          categoria
        })
      });

      if (!resposta.ok) {
        // Se a resposta não for JSON válido, evita erro ao tentar parsear
        let erroMsg = 'Erro ao cadastrar produto';
        try {
          const erro = await resposta.json();
          erroMsg = erro.mensagem || erroMsg;
        } catch (_) {
          // Se não for JSON, mantém a mensagem padrão
        }
        throw new Error(erroMsg);
      }

      setMensagem('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setCategoria('');
    } catch (erro: any) {
      console.error('Erro ao cadastrar produto:', erro);
      setMensagem(`Erro: ${erro.message}`);
    }
  };

  return (
    <>
      <Header />
      <ExcluirProduto />

      <section className="formulario-secao">
        <div className="formulario-cartao">
          <h2 className="titulo-formulario">Cadastrar Novo Produto</h2>

          <form onSubmit={handleSubmit}>
            <div className="campo-formulario">
              <label htmlFor="nome">Nome:</label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="preco">Preço:</label>
              <input
                id="preco"
                type="number"
                step="0.01"
                value={preco}
                onChange={e => setPreco(e.target.value)}
                required
              />
            </div>

            <div className="campo-formulario">
              <label htmlFor="categoria">Categoria:</label>
              <select
                id="categoria"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                required
              >
                <option value="">Selecione a categoria</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
              </select>
            </div>

            <button type="submit" className="botao-enviar">
              Cadastrar Produto
            </button>
          </form>

          {mensagem && <p className="mensagem-status">{mensagem}</p>}
        </div>
      </section>
    </>
  );
}