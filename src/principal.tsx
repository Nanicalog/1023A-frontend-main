import './pagina.css';

function Principal() {
    return (
        <>
            <header className="cabecalho">
                <div className="logotipo">Plumeria</div>
                <nav className="navegacao">
                    <ul className="links-navegacao">
                        <li><a href="/perfumes">Perfumes</a></li>
                        <li><a href="/nova-fragrancia">Nova Fragrância</a></li>
                        <li><a href="/login">Cadastrar Produtos</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="novidades">
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://acdn-us.mitiendanube.com/stores/001/487/363/products/71wwanx59kl-f133ac9272d2e56ccb17480290026030-1024-1024.png"
                                alt="Explosão doce e envolvente que desperta os sentidos com charme e ousadia."
                            />
                        </div>
                        <h2>Sweet Tooth</h2>
                        <p>Sweet Tooth — Explosão doce e envolvente que desperta os sentidos com charme e ousadia.</p>
                        <p>Perfume</p>
                        <strong>$400.50</strong>
                    </div>

                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://drogariaspacheco.vteximg.com.br/arquivos/ids/981577-1000-1000/image-1eba1445112b4c9ebf7ef5dc660c5987.jpg?v=638004925121800000"
                                alt="Um convite à paixão intensa"
                            />
                        </div>
                        <h2>Mon Paris</h2>
                        <p>Mon Paris — Um convite à paixão intensa</p>
                        <p>Body Splash</p>
                        <strong>$800.00</strong>
                    </div>

                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://dcdn-us.mitiendanube.com/stores/002/272/909/products/ariana-thank-031-ba00c99068ec068d6816618102060919-1024-1024.jpg"
                                alt="Doce, confiante e ousada."
                            />
                        </div>
                        <h2>Thank U Next - Ariana Grande</h2>
                        <p>Thank U Next — doce, confiante e ousada.</p>
                        <p>Perfume</p>
                        <strong>$300.00</strong>
                    </div>

                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://images.tcdn.com.br/img/img_prod/611043/miss_dior_perfume_feminino_edp_50ml_dior_6349_1_0b303ade70f98b1992e3a1deb4d404aa.jpg"
                                alt="Elegância em forma de aroma"
                            />
                        </div>
                        <h2>Miss Dior</h2>
                        <p>Miss Dior — elegância em forma de aroma</p>
                        <p>Body Splash</p>
                        <strong>$800.00</strong>
                    </div>
                </div>

                <h1>Sweet and confident</h1>
                <p>Perfumes da melhor fragrância para você.</p>
            </main>

            <footer className="rodape">
                <p>&copy; 2025 Plumeria – Todos os direitos reservados.</p>
            </footer>
        </>
    );
}

export default Principal;
