import { Routes, Route } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { Contato } from "./Componentes/Contato";
import { Footer } from "./Componentes/Footer";
import { Header } from "./Componentes/Header";
import { Produtos } from "./Componentes/Produtos";
import { Sobre } from "./Componentes/Sobre";
import "./Styles.global.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home nomePagina="Aprimoramento Profissional" />}
        />
        <Route
          path="/produtos"
          element={<Produtos nomePagina="Nossos Produtos" />}
        />
        <Route
          path="/contato"
          element={<Contato nomePagina="Entre em Contato" />}
        />
        <Route path="/sobre" element={<Sobre nomePagina="Sobre Nós" />} />
      </Routes>
      {<Footer nomePagina="Atividade Prática Vite React" />}
    </div>
  );
}
export default App;
