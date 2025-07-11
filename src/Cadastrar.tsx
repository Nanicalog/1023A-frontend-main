import { useState } from 'react';
import './pagina.css';
import Header from './Header.tsx';
import './Header.css';
import cadastrar from './Cadastrar.tsx';

export default function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (evento: React.FormEvent) => {
    evento.preventDefault();
    setMensagem('Enviando...');

    try {
      const resposta = await fetch('http://localhost:3000/Produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          preco: parseFloat(preco),
          categoria
        })
      });

      if (!resposta.ok) {
        const erro = await resposta.json();
        throw new Error(erro.mensagem || 'Erro ao cadastrar produto');
      }

      setMensagem('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setCategoria('');
    } catch (erro: any) {
      setMensagem(`Erro: ${erro.message}`);
    }
  };

  return (
    <>
      <Header />

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

            <button type="submit" className="botao-enviar">Cadastrar Produto</button>
          </form>

          {mensagem && <p className="mensagem-status">{mensagem}</p>}
        </div>
      </section>
    </>
  );
}
