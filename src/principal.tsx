import './pagina.css';
import Header from './Header.tsx';
import './Header.css';

function Principal() {
    return (
        <>
            <Header />
            
            <main>
                <h1 className="titulo-produtos">Conheça Nossas Fragâncias</h1>

                <div className="lancamento">
                    {/* sweet tooth */}
                    <div className="produto-principal">
                        <div className="imagem-principal">
                            <img
                                src="https://acdn-us.mitiendanube.com/stores/001/487/363/products/71wwanx59kl-f133ac9272d2e56ccb17480290026030-1024-1024.png"
                                alt="Explosão doce e envolvente"
                            />
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Principal;
