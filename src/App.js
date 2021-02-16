
import './css/App.css';
import Header from './app/Header';
import Home from './app/Home';
import Footer from './app/Footer';
import SearchPage from './app/SearchPage';

// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />

        {/* Conditionally render the page */}
        <Switch>
          <Route path="/search">
            {/* /search */}
            <SearchPage />
          </Route>

          <Route path="/">
            {/* / */}
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
