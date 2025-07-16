import { useState } from 'react';
import './pagina.css';      
import Header from './Header'; 
import './Header.css';    

export default function FormularioCadastro() {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');         // Nome do produto
  const [preco, setPreco] = useState('');       // Preço do produto
  const [categoria, setCategoria] = useState(''); // Categoria do produto (Feminino/Masculino)
  const [mensagem, setMensagem] = useState(''); // Mensagem de status (ex: sucesso ou erro)

  // Função chamada quando o formulário é enviado
  const handleSubmit = async (evento: React.FormEvent) => {
    evento.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    setMensagem('Enviando...'); // Mostra uma mensagem temporária enquanto envia os dados

    // Validação do preço para garantir que seja um número válido e positivo
    const precoConvertido = parseFloat(preco);
    if (isNaN(precoConvertido) || precoConvertido <= 0) {
      setMensagem('Por favor, insira um preço válido.');
      return; // Para a execução se o preço for inválido
    }

    try {
      // usa o facth para fazer uma requisição no http post 
      const resposta = await fetch('http://localhost:3000/Produtos', {
        method: 'POST', // Método POST para enviar dados o banco
        headers: { 'Content-Type': 'application/json' }, // Cabeçalho indicando que está enviando JSON
        body: JSON.stringify({ // Converte os dados para JSON antes de enviar
          nome,
          preco: precoConvertido,
          categoria
        })
      });

      // Se a resposta não for bem-sucedida
      if (!resposta.ok) {
        let erroMsg = 'Erro ao cadastrar produto'; // Mensagem padrão
        try {
          // Tenta ler a resposta como JSON para obter uma mensagem de erro mais específica
          const erro = await resposta.json();
          erroMsg = erro.mensagem || erroMsg;//mensagem que veio do back se tiver
        } catch (_) {
          // Se não conseguir ler como JSON, mantém a mensagem padrão
        }
        throw new Error(erroMsg); // Lança um erro para cair no catch
      }

      // Se tudo der certo, mostra mensagem de sucesso e limpa os campos
      setMensagem('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setCategoria('');
    } catch (erro: any) {
      // Se houver erro na requisição ou outro problema, mostra a mensagem
      console.error('Erro ao cadastrar produto:', erro);
      setMensagem(`Erro: ${erro.message}`);
    }
  };

  return (
    <>
      {/* form */}
      <Header />

      <section className="formulario-secao">
        <div className="formulario-cartao">
          <h2 className="titulo-formulario">Cadastrar Novo Produto</h2>

          {/* Formulário com evento onSubmit que chama handleSubmit "cuida da validação dos dados*/}
          <form onSubmit={handleSubmit}>

            {/* Campo para digitar o nome do produto */}
            <div className="campo-formulario">
              <label htmlFor="nome">Nome:</label>
              <input
                id="nome"
                type="text"
                value={nome} // Valor vinculado ao estado nome
                onChange={e => setNome(e.target.value)} // Atualiza o estado sempre que o usuário digita
                required // Campo obrigatório
              />
            </div>

            {/* Campo para digitar o preço do produto */}
            <div className="campo-formulario">
              <label htmlFor="preco">Preço:</label>
              <input
                id="preco"
                type="number" // Só permite números
                step="0.01"   // Permite casas decimais
                value={preco}
                onChange={e => setPreco(e.target.value)}
                required
              />
            </div>

            {/* Campo para selecionar a categoria */}
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

            {/* Botão que envia o formulário */}
            <button type="submit" className="botao-enviar">
              Cadastrar Produto
            </button>
          </form>

          {/* Se houver alguma mensagem (erro ou sucesso), exibe abaixo do formulário */}
          {mensagem && <p className="mensagem-status">{mensagem}</p>}
        </div>
      </section>
    </>
  );
}
