import './pagina.css';
import Header from './Header.tsx';
import './Header.css';

function Principal() {
    return (
        <>
            <Header />

            <main>
                <h1 className="titulo-produtos">Conheça Nossas Fragâncias</h1>
              
                <div className="novidades">
                    {/* sweet tooth */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://acdn-us.mitiendanube.com/stores/001/487/363/products/71wwanx59kl-f133ac9272d2e56ccb17480290026030-1024-1024.png"
                                alt="Explosão doce e envolvente"
                            />
                        </div>
                        <h2>Sweet Tooth</h2>
                        <p>Sweet Tooth — Explosão doce e envolvente</p>
                        <strong>$400.50</strong>
                    </div>

                    {/* ultra male */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://azperfumes.vteximg.com.br/arquivos/ids/161550-1000-1000/jen-paul-ulta-male-eau-de-toilette-masculino.jpg?v=635878466118900000"
                                alt="Ultra male"
                            />
                        </div>
                        <h2>Ultra Male</h2>
                        <p>Ultra Male — Sofisticação</p>
                        <strong>$300.00</strong>
                    </div>

                    {/* mon paris*/}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://drogariaspacheco.vteximg.com.br/arquivos/ids/981577-1000-1000/image-1eba1445112b4c9ebf7ef5dc660c5987.jpg?v=638004925121800000"
                                alt="Mon Paris"
                            />
                        </div>
                        <h2>Mon Paris</h2>
                        <p>Mon Paris — Um convite à paixão intensa</p>
                        <strong>$800.00</strong>
                    </div>

                    {/* scandal */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://d1fcuu5do6alz2.cloudfront.net/Custom/Content/Products/10/83/1083939_jean-paul-gaultier-scandal-pour-homme-perfume-masculino-eau-de-toilette-17921_m3_638282235768997548.webp"
                                alt="Scandal"
                            />
                        </div>
                        <h2>Scandal</h2>
                        <p>Scandal — Luxo & Exclusividade</p>
                        <strong>$400.00</strong>
                    </div>

                    {/* thank u next */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://dcdn-us.mitiendanube.com/stores/002/272/909/products/ariana-thank-031-ba00c99068ec068d6816618102060919-1024-1024.jpg"
                                alt="Thank U Next"
                            />
                        </div>
                        <h2>Thank U Next - Ariana Grande</h2>
                        <p>Thank U Next — Doce, confiante e ousada.</p>
                        <strong>$300.00</strong>
                    </div>

                    {/* le beau */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://anbeauty.vtexassets.com/arquivos/ids/165663/438049-B.jpg?v=637667832760530000"
                                alt="Le Beau"
                            />
                        </div>
                        <h2>Le Beau</h2>
                        <p>Le Beau — Joia Olfativa</p>
                        <strong>$400.00</strong>
                    </div>

                    {/* miss dior */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://images.tcdn.com.br/img/img_prod/611043/miss_dior_perfume_feminino_edp_50ml_dior_6349_1_0b303ade70f98b1992e3a1deb4d404aa.jpg"
                                alt="Miss Dior"
                            />
                        </div>
                        <h2>Miss Dior</h2>
                        <p>Miss Dior — Elegância em forma de aroma</p>
                        <strong>$800.00</strong>
                    </div>

                    {/* Sauvage */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://m.media-amazon.com/images/I/61bhH5uBOnL._UF1000,1000_QL80_.jpg"
                                alt="Sauvage"
                            />
                        </div>
                        <h2>Sauvage</h2>
                        <p>Sauvage — Confiança e Presença</p>
                        <strong>$400.00</strong>
                    </div>

                    {/* toilette */}
                    <div className="produto">
                        <div className="imagem">
                            <img
                                src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw8561c84c/images/hi-res-BR/3614273683401.02_1000px.jpg?sw=556&sh=680&sm=fit"
                                alt="Toilette"
                            />
                        </div>
                        <h2>Toilette</h2>
                        <p>Toilette — Elegância em cada nota</p>
                        <strong>$400.00</strong>
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
