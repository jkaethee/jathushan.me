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

function MusicPage() {
  return (
    <div>
      <div className="music-items-wrapper">
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_1')}
          onMouseLeave={() => imageLighten('music-panels music-panel_1')}>
          <div className="music-panels music-panel_1" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Trapsoul
              <p> Bryson Tiller</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_2')}
          onMouseLeave={() => imageLighten('music-panels music-panel_2')}>
          <div className="music-panels music-panel_2" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Palette
              <p>IU</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_3')}
          onMouseLeave={() => imageLighten('music-panels music-panel_3')}>
          <div className="music-panels music-panel_3" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Everythings for Sale
              <p>Westside Boogie</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_4')}
          onMouseLeave={() => imageLighten('music-panels music-panel_4')}>
          <div className="music-panels music-panel_4" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              LY: Tear
              <p>BTS</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_5')}
          onMouseLeave={() => imageLighten('music-panels music-panel_5')}>
          <div className="music-panels music-panel_5" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              East Atlanta Love Letter
              <p>6lack</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_6')}
          onMouseLeave={() => imageLighten('music-panels music-panel_6')}>
          <div className="music-panels music-panel_6" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              good kid, m.A.A.d city
              <p>Kendrick Lamar</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_7')}
          onMouseLeave={() => imageLighten('music-panels music-panel_7')}>
          <div className="music-panels music-panel_7" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              The Color Of You
              <p>Alina Baraz</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseEnter={() => imageDarken('music-panels music-panel_8')}
          onMouseLeave={() => imageLighten('music-panels music-panel_8')}>
          <div className="music-panels music-panel_8" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              CASE STUDY 01
              <p>Daniel Caesar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MusicPage;