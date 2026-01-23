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
import tp1 from '../images/topaz_3.0_1.png'
import tp2 from '../images/topaz_3.0_2.png'
import hw1 from '../images/heart-watch-1.png'
import hw2 from '../images/heart-watch-2.png'

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
const topaz_photo = [
  {
    original: tp1,
    description: 'Dynamic and flexible cross-platform UI development with Qt'
  },
  {
    original: tp2,
    description: 'Modern image selection tools paired with AI-powered filters using performant C++ code'
  }
]

const heart_watch = [
  {
    original: hw1,
    description: 'Asychronous smartwatch sensor collection using background threads'
  },
  {
    original: hw2,
    description: 'Sychronized, raw multimodal signal collection from a diverse cohort'
  }
]
function ProjectsPage() {
  return (
    <div className="project-panels-wrapper"> 
      <div className="project-panel-wrapper" >
        <ImageGallery items={heart_watch} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>
    <div className="project-panel-description">
        <div className="project-panel-description-title">
          HEART-Watch
        </div>
        <div style={{ fontSize: '18px', padding: '10px 0 20px 0' }}>
          Engineered a custom Android application to interface with ECG, PGG, and ACC sensors on a Google Pixel Watch to record raw sensor readouts. Designed an offline data collection system to avoid firewall and latency restrictions through Kotlin Coroutines and Room!
          <br />
          This smartwatch application was used to develop the HEART-Watch dataset <a href="https://www.researchgate.net/publication/398313350_HEART-Watch_A_multimodal_physiological_dataset_from_a_Google_Pixel_Watch_across_different_physical_states" target="_blank" rel="noopener noreferrer">(paper under review)</a>.
          <br />
        </div>
        <div style={{ fontSize: '20px', fontStyle: 'italic'}} className="project-specs">
          <b>Android App</b>: Kotlin, Python
          <br />
          <b>Tools</b>: Android Studio, Arduino Uno
        </div>
      </div>

      <div className="project-panel-description">
        <div className="project-panel-description-title">
          Topaz Photo AI 
        </div>
        <div style={{ fontSize: '18px', padding: '10px 0 20px 0' }}>
          The main software engineer behind several major rewrites for Windows and Mac desktop applications to perform dynamic image editing.
          <br />
          Triaged, developed, and deployed public weekly/biweekly releases for 100k+ weekly active users.
          <br />
          <a href="https://community.topazlabs.com/c/photo-ai/photo-ai-releases/85" target="_blank" rel="noopener noreferrer">You can search for my name in the release forums!</a>
        </div>
        <div style={{ fontSize: '20px', fontStyle: 'italic'}} className="project-specs">
          <b>Desktop App</b>: QML, C++
          <br />
          <b>Tools</b>: Qt Framework
        </div>
      </div>
      <div className="project-panel-wrapper" >
        <ImageGallery items={topaz_photo} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>

      <div className="project-panel-wrapper" >
        <ImageGallery items={prevent_covid_app} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>
      <div className="project-panel-description">
        <div className="project-panel-description-title">
          PreventCOVID
        </div>
        <div style={{ fontSize: '18px', padding: '10px 0 20px 0' }}>
          A web application to collect and email participant information for a COVID-19 research study led by <a href="https://www.uhnresearch.ca/researcher/deepali-kumar" target="_blank" rel="noopener noreferrer">Dr. Deepali Kumar</a>
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
            This application was a joint project with <a href="https://www.linkedin.com/in/averyryoo/" target="_blank" rel="noopener noreferrer">Avery Ryoo</a> completed in December 2020.
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