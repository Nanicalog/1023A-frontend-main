import { useState, useEffect } from 'react';
import Header from './Header';
import './Header.css';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

export default function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Buscar produtos ao carregar a página
  async function buscarProdutos() {
    try {
      const resposta = await fetch('http://localhost:8000/produtos');
      const dados = await resposta.json();
      setProdutos(dados);
    } catch (error) {
      console.error('Erro ao buscar produtos', error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  const handleSubmit = async (evento: React.FormEvent) => {
    evento.preventDefault();
    setMensagem('Enviando...');

    try {
      const resposta = await fetch('http://localhost:8000/produtos', {
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

      // Atualiza lista de produtos após cadastro
      buscarProdutos();

    } catch (erro: any) {
      setMensagem(`Erro: ${erro.message}`);
    }
  };

  // Função para deletar produto pelo id
  async function deletarProduto(id: number) {
    const confirmar = window.confirm('Deseja realmente excluir este produto?');
    if (!confirmar) return;

    try {
      const resposta = await fetch(`http://localhost:8000/produtos/${id}`, {
        method: 'DELETE',
      });

      if (resposta.ok) {
        // Atualiza a lista removendo o produto excluído
        setProdutos(produtos.filter(p => p.id !== id));
        setMensagem('Produto excluído com sucesso!');
      } else {
        setMensagem('Erro ao excluir produto');
      }
    } catch (error) {
      console.error('Erro ao deletar produto', error);
      setMensagem('Erro ao excluir produto');
    }
  }

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

      <section className="lista-produtos">
        <h2>Produtos Cadastrados</h2>
        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado.</p>
        ) : (
          <ul>
            {produtos.map(produto => (
              <li key={produto.id}>
                {produto.nome} - R$ {produto.preco.toFixed(2)} - Categoria: {produto.categoria}{' '}
                <button onClick={() => deletarProduto(produto.id)}>Excluir</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

