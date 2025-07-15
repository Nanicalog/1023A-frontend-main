import { Link } from 'react-router-dom'; // Import Link from react-router-dom to enable navigation
import './Header.css';

export default function Header() { // Define o Header  como component
  return (
    <header className="cabecalho">
      <div className="logotipo">Pluméria</div>
      <nav className="navegacao">
        <ul className="links-navegacao">
          <li><Link to="/produtos">Produtos</Link></li> 
          <li><Link to="/Cadastrar">Adiministrador</Link></li>
           <li><Link to="/">Home</Link></li> 
           
        </ul>
      </nav>
    </header>
  );
}