import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from './components/Button';
import GlobalStyle from './GlobalStyle';
import WishListItem from './components/WishListItem';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <WishListItem title="Caro" />
          <Button>+</Button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
