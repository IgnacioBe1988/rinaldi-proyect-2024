const BaseLayout = ({ children }) => {
  return (
    <>
      <header>
        <p>Header del site</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer del site</p>
      </footer>
    </>
  );
};

export default BaseLayout;
