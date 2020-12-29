import React from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
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

function App() {
  return (
    <div className="App" style={{ }}>
      <Router>
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
