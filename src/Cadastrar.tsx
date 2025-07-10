import { useState } from 'react';
import './Cadastrar.css';
import './pagina.css';
import Header from './Header.tsx';
import './Header.css';

export default function Form() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
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
        } catch (err: any) {
            setMensagem(`Erro: ${err.message}`);
        }
    }

    return (
        <div className="form-container">
            <h2>Cadastrar Novo Produto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                </label>
                <label>
                    Preço:
                    <input type="number" step="0.01" value={preco} onChange={e => setPreco(e.target.value)} required />
                </label>
                <label>
                    Categoria:
                    <select value={categoria} onChange={e => setCategoria(e.target.value)} required>
                        <option value="">Selecione a categoria</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                    </select>
                </label>
                <button type="submit">Cadastrar Produto</button>
            </form>
            {mensagem && <p className="mensagem">{mensagem}</p>}
        </div>
    );
}