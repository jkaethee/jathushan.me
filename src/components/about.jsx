import React from "react";
import '../styles.css';
import 'font-awesome/css/font-awesome.min.css';
import ImageGallery from 'react-image-gallery';
import about1 from '../images/about-pics/about1.jpg';
import about2 from '../images/about-pics/about2.jpg';
import about3 from '../images/about-pics/about3.jpg';

const about = [
  {
    original: about1,
  },
  {
    original: about2,
  },
  {
    original: about3,
  }
]

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div style={{ marginRight: 25 }}>
        <div className="aboutHeader">
          About
        </div>
        <div className="aboutBody">
          Hi! I'm Jathushan and I'm a 3rd year student at the University of Waterloo studying Biomedical Engineering.
          <br/>
          <p>
            My passions revolve around producing innovative solutions within the healthcare sector, and I'm always eager to tackle new challenges!
            Outside of my work life, I am interested in all forms of media: music, film, print, etc. I am also an avid NBA and (more recently) NFL fan, and love to partake in sports and athletics<span aria-label="smiley" role="img">😃</span>
          </p>
        </div>
      </div>
      <div>
        <ImageGallery items={about} autoPlay={true} showFullscreenButton={false} showNav={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div>
    </div>
  )
}
export default AboutPage;