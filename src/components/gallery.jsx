import React from "react";
import '../styles.css';
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from 'react-router-dom';

const imageDarken = (className) => {
  const item = document.getElementsByClassName(className);
  item[0].classList.add('img-darken')
}
const imageLighten = (className) => {
  const item = document.getElementsByClassName(className);
  item[0].classList.remove('img-darken')
}

function GalleryPage() {
  const history = useHistory();
  function onMusicClick() {
    history.push('/music');
  }
  function onCinemaClick() {
    history.push('/cinema');
  }
  return (
    <div>
      <div className="play-items-wrapper">
        <div className="play-item-wrapper" 
          onClick={onMusicClick}
          onMouseEnter={() => imageDarken('play-panels music-panel_play')}
          onMouseLeave={() => imageLighten('play-panels music-panel_play')}>
          <div className="play-panels music-panel_play" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Music
              <p>albums on repeat</p>
            </div>
          </div>
        </div>
        <div className="play-item-wrapper" 
          onClick={onCinemaClick}
          onMouseEnter={() => imageDarken('play-panels cinema-panel_play')}
          onMouseLeave={() => imageLighten('play-panels cinema-panel_play')}>
          <div className="play-panels cinema-panel_play" />
          <div className="img-text-wrapper">
            <div className="subtitle">
              Cinema
              <p>must-watch films</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GalleryPage;