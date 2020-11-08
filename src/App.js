import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Categories, CategoryTopNews } from './Categories';
import Search from './Search/Search';
import { NewsDetails, TopNews } from './News';
import { Header } from './shared';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/search">
            <Search />
          </Route>

          <Route path="/categories/:id">
            <CategoryTopNews />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>

          <Route path="/details">
            <NewsDetails />
          </Route>

          <Route path="/">
            <TopNews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
