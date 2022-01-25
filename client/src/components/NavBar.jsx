import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../logo.png";
import Nombre from "../img/nombre dos líneas.png";

export default function NavBar() {
  return (
    <nav>
      <div className="contenedor">
        <div>
          <img className="logoImagen" src={Logo} alt="not found" />
        </div>
        <div className="align">
          <span className="menu">
            <Link to="/home" className="link">
              Home
            </Link>
          </span>

          <span className="menu">
            <Link to="/recipe" className="link">
              Crear receta
            </Link>
          </span>

          <span className="menu">
            <Link to="/category" className="link">
              Crear categoría
            </Link>
          </span>

          <span className="menu">
            <Link to="/ingredient" className="link">
              Crear ingrediente
            </Link>
          </span>
        </div>
        <div>
          <img className="logoTexto" src={Nombre} alt="not found" />
        </div>
      </div>
    </nav>
  );
}
