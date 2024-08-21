import NavBar from "./componentes/NavBar";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
}

export default App;
