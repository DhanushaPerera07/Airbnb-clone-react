
import './css/App.css';
import Header from './app/Header';
import Home from './app/Home';
import Footer from './app/Footer';
import SearchPage from './app/SearchPage';

// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';

function App() {
  return (
    // BEM
    <div className="app">
      <Helmet>
        <title>Airbnb Clone | By Dhanusha</title>
      </Helmet>
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
