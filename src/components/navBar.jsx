import React from "react"
import '../styles.css'
import 'font-awesome/css/font-awesome.min.css'
import { Link, useLocation } from 'react-router-dom'
import resume from '../resume.pdf'

function NavBar() {
  const location = useLocation()
  const activeClass = (route) => { return location.pathname === route ? "active-nav-link" : null }
  return (
    <div className="nav-wrapper">
      <div className="left-side" >
        <div className="nav-link-wrapper">
          <Link to="/home" id="home-link" className={activeClass("/home")}>
            HOME
          </Link>
        </div>
        <div className="nav-link-wrapper">
          <Link to="/about" id="about-link" className={activeClass('/about')}> 
            ABOUT
          </Link>
        </div>
        <div className="nav-link-wrapper">
          <Link to="/projects" id="project-link" className={activeClass('/projects')}> 
            PROJECTS
          </Link>
        </div>
      </div>
      <div className="right-side">
        <div className="social-icon" onClick={()=>{window.open(resume)}} style={{cursor: "pointer"}}> 
            <i className = "fa fa-paperclip" style={{ color:"black" }} title="Resume"/>  
        </div>
        <div className="social-icon"> 
          <a href="mailto:jkaethee@uwaterloo.ca">
            <i className = "fa fa-envelope" style={{ color:"black" }} title="Email"/> 
          </a>  
        </div>
        <div className="social-icon"> 
          <a href="https://www.linkedin.com/in/jkaethee/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" style={{ color:"black" }} title="Linkedin"/> 
          </a>
        </div>
        <div className="social-icon"> 
          <a href="https://github.com/jkaethee" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" style={{ color:"black" }} title="Github"/> 
          </a>
        </div>
        <div>JATHUSHAN KAETHEESWARAN</div>
      </div>
    </div>
  )
};

export default NavBar;