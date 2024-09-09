import Header from "../containers/Header/index";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>
        <p>Footer del site</p>
      </footer>
    </>
  );
};

export default BaseLayout;
