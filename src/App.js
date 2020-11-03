import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import AddPage from './pages/Add';
import Details from './pages/Detail';
import Welcome from './pages/Welcome';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/Add">
          <AddPage />
        </Route>
        <Route path="/Details">
          <Details />
        </Route>
        <Route path="/">
          <Welcome
            // title="Caro"
            goToDetailsLink={<Link to="/Details">Caro</Link>}
            goToAddLink={<Link to="/Add">+</Link>}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
