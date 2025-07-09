import { Link } from 'react-router-dom';
import './Header.css';  

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="logotipo">Pluméria</div>
      <nav className="navegacao">
        <ul className="links-navegacao">
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/administrador">Administrador</Link></li>
          <li><Link to="/cadastrar">Cadastrar</Link></li>
        </ul>
      </nav>
    </header>
  );
}