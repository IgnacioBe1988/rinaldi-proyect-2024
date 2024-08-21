import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="container">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <div className="project-title">Rinaldi E-Commerce</div>
        <ul className="menu">
          <li>
            <a href="http://">Shop</a>
          </li>
          <li>
            <a href="http://">Contacto</a>
          </li>
          <li>
            <a href="http://">Login</a>
          </li>
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
