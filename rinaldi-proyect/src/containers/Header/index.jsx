import logo from "../../assets/logo.png";
import Menu from "../../componentes/Menu";
import CartWidget from "../../componentes/CartWidget/index";

const Header = () => {
  const links = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Tienda",
      href: "#",
    },
    {
      label: "Contacto",
      href: "#",
    },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar__logo" href="/">
          <figure className="navbar__img">
            <img src={logo} alt="Logo" />
          </figure>
          <h1 className="navbar__title">Rinaldi Shop</h1>
        </a>
        <Menu className="navbar" links={links}>
          <li>
            <a href="#" className="navbar__link-button">
              <CartWidget quantity={0} />
            </a>
          </li>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
