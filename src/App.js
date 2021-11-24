import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Table, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Rotas from "./Rotas";

function App() {
  return (
    <div>


      <BrowserRouter>
          <Menu />
        <Container>
          <Rotas />
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
