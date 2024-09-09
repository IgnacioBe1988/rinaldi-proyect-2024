import BaseLayout from "./layout/BaseLayout";
import ItemList from "./componentes/ItemList";

function App() {
  return (
    <>
      <BaseLayout>
        <ItemList />
      </BaseLayout>
    </>
  );
}

export default App;

// import NavBar from "./componentes/NavBar";
// import "./App.scss";
// import ItemListContainer from "./componentes/ItemListContainer";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
//     </>
//   );
// }

// export default App;
