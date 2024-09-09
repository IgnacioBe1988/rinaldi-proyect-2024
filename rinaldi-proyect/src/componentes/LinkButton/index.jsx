const LinkButton = ({ className, label, href = "#", ...props }) => {
  return (
    <a
      {...props}
      className={`link-button ${className}__link-button`}
      href={href}
    >
      {label}
    </a>
  );
};

export default LinkButton;
