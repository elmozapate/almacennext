import './css/sass/estilo.css';
import BarraNav from './components/barranav';
import Index from './pages/elindex/elindex';
import Footer from './components/footer';
import Productos from './pages/productos';
import Inventario from './pages/inventario';
import { BrowserRouter as Router, Switch, Route/* ,  link */ } from "react-router-dom";
function App() {
  return (
    <Router>
      <BarraNav />
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/index.html">
          <Index />
        </Route>
        <Route path="/productos.html" >
          <Productos />
        </Route>
        <Route path="/inventario.html">
          <Inventario />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
