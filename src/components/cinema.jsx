import React from "react";
import '../styles.css';
import 'font-awesome/css/font-awesome.min.css';

const imageDarken = (className) => {
  const item = document.getElementsByClassName(className);
  item[0].classList.add('img-darken')
}
const imageLighten = (className) => {
  const item = document.getElementsByClassName(className);
  item[0].classList.remove('img-darken')
}

function CinemaPage() {
  return (
    <div>
      <div className="cinema-items-wrapper">
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_1')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_1')}>
          <div className="cinema-panels cinema-panel_1" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Jurassic Park (1993)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_2')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_2')}>
          <div className="cinema-panels cinema-panel_2" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Good Will Hunting (1997)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_3')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_3')}>
          <div className="cinema-panels cinema-panel_3" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Whisper of the Heart (1995)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_4')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_4')}>
          <div className="cinema-panels cinema-panel_4" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Akira (1988)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_5')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_5')}>
          <div className="cinema-panels cinema-panel_5" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Burning (2018)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_6')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_6')}>
          <div className="cinema-panels cinema-panel_6" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              The Pursuit of Happyness (2006)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_7')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_7')}>
          <div className="cinema-panels cinema-panel_7" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              A Silent Voice (2016)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_8')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_8')}>
          <div className="cinema-panels cinema-panel_8" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Ocean Waves (1993)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_9')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_9')}>
          <div className="cinema-panels cinema-panel_9" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Parasite (2019)
            </div>
          </div>
        </div>
        <div className="cinema-item-wrapper" 
          onMouseEnter={() => imageDarken('cinema-panels cinema-panel_10')}
          onMouseLeave={() => imageLighten('cinema-panels cinema-panel_10')}>
          <div className="cinema-panels cinema-panel_10" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Creed (2015)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CinemaPage;