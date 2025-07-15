import './pagina.css';
import Header from './Header.tsx';
import './Principal.css';
import './Header.css';


function Principal() {
  return (
    <>
      <Header />

      <main className="pagina-principal">
        <h1 className="titulo-produtos">Conheça Nossa Nova Fragância</h1>
        <h2 className="subtitulo">Sweet Tooth - Por Sabrina Carpenter</h2>

        <div className="lancamento">
          <div className="produto-principal">
            <div className="imagem-principal">
              <img
                src="https://acdn-us.mitiendanube.com/stores/001/487/363/products/71wwanx59kl-f133ac9272d2e56ccb17480290026030-1024-1024.png"
                alt="Explosão doce e envolvente"
              />
            </div>
            <h2>Sweet Tooth</h2>
            <p>Sweet Tooth — Explosão doce e envolvente</p>
            <strong>Nova Fragância por Sabrina Carpenter</strong>
          </div>
        </div>
      </main>
       <footer className="rodape">
                <p>&copy; 2025 Plumeria – Todos os direitos reservados.</p>
            </footer>
    </>
  );
}

export default Principal;



