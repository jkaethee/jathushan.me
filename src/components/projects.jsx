import React from "react";
import '../styles.css';
import 'font-awesome/css/font-awesome.min.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import conv1 from '../images/image convolution examples.PNG'
import conv2 from '../images/conv-2.png'
import weather1 from '../images/weather app.png'
import weather2 from '../images/weather app 2.PNG'
import pc1 from '../images/prevent covid app.PNG'
import pc2 from '../images/prevent covid app 2.PNG'

const image_conv_app = [
  {
    original: conv1,
    description: 'Displays original and transformed images'
  },
  {
    original: conv2,
    description: 'Mathematical theory'
  }
]
const weather_app = [
  {
    original: weather1,
    description: 'Manage city data using SQLite and SQLAlchemy'
  },
  {
    original: weather2,
    description: 'Powered by OpenWeather API'
  }
]
const prevent_covid_app = [
  {
    original: pc1,
    description: 'Secure data collection for COVID-19 Research Study'
  },
  {
    original: pc2,
    description: 'Responsive error handling and reCAPTCHA implementation'
  }
]
function ProjectsPage() {
  return (
    <div className="project-panels-wrapper"> 
      <div className="project-panel-wrapper" >
        <ImageGallery items={prevent_covid_app} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>
      <div className="project-panel-description">
        <div className="project-panel-description-title">
          PreventCOVID
        </div>
        <div style={{ fontSize: '18px', padding: '10px 0 20px 0' }}>
          A web application for collecting and emailing participant information for a COVID-19 research study led by <a href="https://www.uhnresearch.ca/researcher/deepali-kumar" target="_blank" rel="noopener noreferrer">Dr. Deepali Kumar</a>
          <br />
          This project was designed under UHN for my Fall 2020 co-op term.
        </div>
        <div style={{ fontSize: '20px', fontStyle: 'italic'}} className="project-specs">
          <b>Web Dev</b>: JS, React, Express, Feathers, Webpack, PostgreSQL, Material-UI
          <br />
          <b>Tools</b>: Docker, Postman, MailHog, reCAPTCHA
        </div>
      </div>
      <div className="mobile-flip-div">
        <div className="project-panel-description">
          <div className="project-panel-description-title">
            Image Convolution Visualizer
            <div className="social-icon"> 
              <a href="https://github.com/jkaethee/Image-Convolution-Visualizer" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" style={{ color:"black", padding: '15px' }} title="Github"/> 
              </a>
            </div>
          </div>
          <div style={{ fontSize: '18px', padding: '10px 0 20px 0' }}>
            A simple web application to visualize different convolutions by using unique image kernels.
            <br />
            This application was a joint project with <a href="https://www.linkedin.com/in/averyryoo/" target="_blank" rel="noopener noreferrer">Avery Ryoo</a> until December 2020.
          </div>
          <div style={{ fontSize: '20px', fontStyle: 'italic'}} className="project-specs">
            <b>Web Dev</b>: Python, Flask, HTML, Bulma
            <br />
            <b>Libraries</b>: NumPy, OpenCV, Scikit-image, Python Imaging Library (PIL)
          </div>
        </div>
        <div className="project-panel-wrapper">
          <ImageGallery items={image_conv_app} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
        </div>
      </div>
      <div className="project-panel-wrapper" >
        <ImageGallery items={weather_app} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>
      <div className="project-panel-description">
        <div className="project-panel-description-title">
          Weather App
          <div className="social-icon"> 
            <a href="https://github.com/jkaethee/Flask-Weather-App" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" style={{ color:"black", padding: '15px' }} title="Github"/> 
            </a>
          </div>
        </div>
        <div style={{ fontSize: '18px', padding: '10px 0 20px 0' }}>
          A web application for displaying the current weather in various cities using the <a href="https://openweathermap.org/current" target="_blank" rel="noopener noreferrer">OpenWeather API</a>
          <br />
          This app was an introductory project for Python web development and relational database work.
        </div>
        <div style={{ fontSize: '20px', fontStyle: 'italic'}} className="project-specs">
          <b>Web Dev</b>: Python, Flask, SQLAlchemy, SQLite, HTML, Bulma
        </div>
      </div>
  </div>
  )
}
export default ProjectsPage;