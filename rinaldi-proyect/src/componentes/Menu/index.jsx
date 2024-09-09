import LinkButton from "../LinkButton";

const Menu = ({ links, className, children }) => {
  return (
    <menu className={`menu ${className}__menu`}>
      {links.map((link) => (
        <li className={`menu__item ${className}__item`}>
          (
          <LinkButton
            key={link.href} // Usa un identificador único para la clave
            className={className}
            href={link.href}
            label={link.label}
          />
          )
        </li>
      ))}
      {children}
    </menu>
  );
};

export default Menu;
