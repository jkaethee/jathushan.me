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
          onMouseOver={() => imageDarken('music-panels music-panel_1')}
          onMouseLeave={() => imageLighten('music-panels music-panel_1')}>
          <div className="music-panels music-panel_1" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Anniversary
              <p> Bryson Tiller</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseOver={() => imageDarken('music-panels music-panel_2')}
          onMouseLeave={() => imageLighten('music-panels music-panel_2')}>
          <div className="music-panels music-panel_2" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Immunity
              <p>Clairo</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseOver={() => imageDarken('music-panels music-panel_3')}
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
          onMouseOver={() => imageDarken('music-panels music-panel_4')}
          onMouseLeave={() => imageLighten('music-panels music-panel_4')}>
          <div className="music-panels music-panel_4" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              The Forever Story
              <p>JID</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseOver={() => imageDarken('music-panels music-panel_5')}
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
          onMouseOver={() => imageDarken('music-panels music-panel_6')}
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
          onMouseOver={() => imageDarken('music-panels music-panel_7')}
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
          onMouseOver={() => imageDarken('music-panels music-panel_8')}
          onMouseLeave={() => imageLighten('music-panels music-panel_8')}>
          <div className="music-panels music-panel_8" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              CASE STUDY 01
              <p>Daniel Caesar</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseOver={() => imageDarken('music-panels music-panel_9')}
          onMouseLeave={() => imageLighten('music-panels music-panel_9')}>
          <div className="music-panels music-panel_9" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Psychodrama
              <p>Dave</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseOver={() => imageDarken('music-panels music-panel_10')}
          onMouseLeave={() => imageLighten('music-panels music-panel_10')}>
          <div className="music-panels music-panel_10" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Cinema
              <p>The Marías</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseOver={() => imageDarken('music-panels music-panel_11')}
          onMouseLeave={() => imageLighten('music-panels music-panel_11')}>
          <div className="music-panels music-panel_11" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Heavy Is The Head
              <p>Stormzy</p>
            </div>
          </div>
        </div>
        <div className="music-item-wrapper"
          onMouseOver={() => imageDarken('music-panels music-panel_12')}
          onMouseLeave={() => imageLighten('music-panels music-panel_12')}>
          <div className="music-panels music-panel_12" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Made in Lagos
              <p>Wizkid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MusicPage;