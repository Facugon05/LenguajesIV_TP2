import './App.css';
import Encabezado from "../src/components/Encabezado";
import Inicio     from "../src/pages/Inicio";
import Servicios  from "../src/pages/Servicios";
import Contacto   from "../src/pages/Contacto";
import NoExiste   from "../src/pages/NoExiste";
import { HashRouter, Routes, Route } from "react-router";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Encabezado/>
        </div>
        <hashRouter>
              <nav className="App-navbar">
                <NavLink to="/" style={({ isActive }) => ({
      color: isActive ? "blue" : "black",})}>
                  Inicio
                </NavLink>
                <NavLink to="/Servicios" style={({ isActive }) => ({
      color: isActive ? "green" : "black",})}>
                  Servicios
                </NavLink>
                <NavLink to="/Contacto" style={({ isActive }) => ({
      color: isActive ? "red" : "black",})}>Contacto</NavLink>
              </nav>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/*" element={<NoExiste />} />
          </Routes>
        </hashRouter>
      </div>
  </>
  );
}

export default App;
