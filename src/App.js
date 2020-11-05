import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import AddPage from './pages/Add';
import Details from './pages/Detail';
import Welcome from './pages/Welcome';
import Header from './components/Header';

const GoToLink = styled(Link)`
  /* fill:white; */
  display: inline-grid;
  text-align: center;

  border: none;
  background: transparent;
  text-decoration: none;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route path="/Add">
          <AddPage />
        </Route>
        <Route path="/:listId">
          <Details />
        </Route>
        <Route path="/">
          <Welcome
            // title="Caro"
            goToDetailsLink={<GoToLink to="/:listId">Caro</GoToLink>}
            goToAddLink={<GoToLink to="/Add">+</GoToLink>}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
