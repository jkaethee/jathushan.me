import React from "react";
import '../styles.css';
import 'font-awesome/css/font-awesome.min.css';

function AboutPage() {
  return (
    <div className="aboutContainer">
      <div style={{ marginRight: 25 }}>
        <div className="aboutHeader">
          About
        </div>
        <div className="aboutBody">
          Hello! I'm Jathushan and I'm a 2nd year MASc Biomedical Engineering student at the University of Toronto. I'm currently affialted with both the KITE and Krembil Research Institutes with a focus on wearable technology around ECG, PPG, ACC, and EEG signals.
          <br/>
          <p>
            My passions revolve around producing innovative solutions within the healthcare sector, and I'm always eager to tackle new challenges! I have extensive experience as a Full Stack Developer at several biotech companies and hospitals. More recently, I was the primary software engineer on the Topaz Photo AI desktop application based in Texas, where I applied these skills to lead the development work. I'm currently looking for full-time post-grad opportunities in the field of wearables!
            Outside of my work and school life, I am interested in all forms of media: music, film, print, etc. I am also an avid NBA and (more recently) NFL fan, and love to partake in sports and athletics. I'm an avid Brazilian Jiu-Jitsu hobbyist and am a lifelong martial artist at heart <span aria-label="smiley" role="img">😃</span>
          </p>
        </div>
      </div>
      {/* <div>
        <ImageGallery items={about} autoPlay={true} showFullscreenButton={false} showNav={false} showPlayButton={false} showThumbnails={false} showBullets={true} />
      </div> */}
    </div>
  )
}
export default AboutPage;