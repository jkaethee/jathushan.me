import React from "react";
import '../styles.css';
import { useHistory } from 'react-router-dom';
import resume from '../resume.pdf'

const imageDarken = (className) => {
  const item = document.getElementsByClassName(className);
  item[0].classList.add('img-darken')
}
const imageLighten = (className) => {
  const item = document.getElementsByClassName(className);
  item[0].classList.remove('img-darken')
}
function HomePage() {
  const history = useHistory();
  function onResumeClick() {
    window.open(resume)
  }
  function onPlayClick() {
    history.push('/gallery');
  }
  function onProjectsClick() {
    history.push('/projects');
  }

  return (
    <div className="content-wrapper">
      <div className="portfolio-items-wrapper">
        <div className="portfolio-item-wrapper" 
          onClick={onPlayClick}
          onMouseEnter={() => imageDarken('portfolio-panels play-panel_home')}
          onMouseLeave={() => imageLighten('portfolio-panels play-panel_home')}>
          <div className="portfolio-panels play-panel_home" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Gallery
            </div>
          </div>
        </div>
        <div className="portfolio-item-wrapper" 
          onClick={onResumeClick}
          onMouseEnter={() => imageDarken('portfolio-panels resume-panel_home')}
          onMouseLeave={() => imageLighten('portfolio-panels resume-panel_home')}>
          <div className="portfolio-panels resume-panel_home" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Resume
            </div>
          </div>
        </div>
        <div className="portfolio-item-wrapper" 
          onClick={onProjectsClick} 
          onMouseEnter={() => imageDarken('portfolio-panels project-panel_home')}
          onMouseLeave={() => imageLighten('portfolio-panels project-panel_home')}>
          <div className="portfolio-panels project-panel_home" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Projects
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
};

export default HomePage;