import './pagina.css';

function principal() {
    return (
        <>
            <header className="cabecalho">
                
                <div className="logotipo"> Plumeria</div>
                <nav className="navegacao">
                    <ul className="links-navegacao">
                        <li><a href="/perfumes">Perfumes</a></li>
                        <li><a href="/nova fragancia">Nova Fagância</a></li>
                        <li><a href="/login">Cadastrar Produtos</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <h1>A melhor perfumaria!</h1>
                <h2>Perfumes da melhor fragância para voçê.</h2>
            </main>

            <footer className="rodape">
                <p>&copy; 2025 Plumeria – Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

export default principal;