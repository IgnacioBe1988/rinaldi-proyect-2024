const LinkButton = ({ ClassName, label, href = "#", ...props }) => {
  return (
    <a {...props} href={href}>
      {label}
    </a>
  );
};

export default LinkButton;
