import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import GlobalStyle from './GlobalStyle';
import WishListItem from './components/WishListItem';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <WishListItem title="Caro" />
          <Link to="WishList">
            <Button>+</Button>
          </Link>
        </Route>
        <Route path="/WishList" />
      </Switch>
    </Router>
  );
}

export default App;
