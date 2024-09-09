import { BrowserRouter, Routes, Route } from "react-router-dom";

import BaseLayout from "./layout/BaseLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="store" element={<Store />} />
          <Route exact path="detalle/:id" element={<Detail />} />
          <Route exact path="store/categoria/:id" element={<Store />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
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
