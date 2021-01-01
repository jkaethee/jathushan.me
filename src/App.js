import React from 'react';
import './styles.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from './components/navBar.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Gallery from './components/gallery.jsx'
import Music from './components/music.jsx'
import Cinema from './components/cinema.jsx'
import footerImage from './images/footer-image.png'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
ReactGA.initialize("G-7PKVJ9QW1E");
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <div className="App" style={{ }}>
      <Router history={history}>
        <NavBar />
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/music' component={Music} />
            <Route path='/cinema' component={Cinema} />
            <Route>
              <Redirect to='/home' />
            </Route>
          </Switch>
      </Router>
      <footer>
        <img src={footerImage} className="footer-image" alt="Astroboy" />
        <b>Always Learning</b>
      </footer>
    </div>
  );
}

export default App;
