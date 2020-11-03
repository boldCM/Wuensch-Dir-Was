import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import AddPage from './pages/Add';
import Details from './pages/Detail';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <GlobalStyle />
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
