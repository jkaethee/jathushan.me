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

function ResearchPage() {
  return (
    <div>
        <div className="research-subheader-wrapper">Published/Under Review</div>
        <div className="research-items-wrapper">
            <div className="research-item-wrapper" 
            onMouseOver={() => imageDarken('research-panels research-panel_1')}
            onMouseLeave={() => imageLighten('research-panels research-panel_1')}>
            <a href="https://mhealth.jmir.org/2025/1/e73846" target="_blank" rel="noopener noreferrer">
                <div className="research-panels research-panel_1"/>
                <div className="img-text-wrapper">
                        <div className="subtitle">
                        AI-Driven Real-Time Monitoring of Cardiovascular Conditions With Wearable Devices: Scoping Review
                        <p>March 2025</p>
                        </div>
                </div>
            </a>
            </div>
            <div className="research-item-wrapper" 
            onMouseOver={() => imageDarken('research-panels research-panel_2')}
            onMouseLeave={() => imageLighten('research-panels research-panel_2')}>
            <a href="https://www.researchgate.net/publication/398313350_HEART-Watch_A_multimodal_physiological_dataset_from_a_Google_Pixel_Watch_across_different_physical_states" target="_blank" rel="noopener noreferrer">
                <div className="research-panels research-panel_2"/>
                <div className="img-text-wrapper">
                        <div className="subtitle">
                        HEART-Watch: A multimodal physiological dataset from a Google Pixel Watch across different physical states
                        <p>December 2025 (Under Review)</p>
                        </div>
                </div>
            </a>
            </div>
            <div className="research-item-wrapper" 
            onMouseOver={() => imageDarken('research-panels research-panel_3')}
            onMouseLeave={() => imageLighten('research-panels research-panel_3')}>
                <div className="research-panels research-panel_3"/>
                <div className="img-text-wrapper">
                        <div className="subtitle">
                        Rapid Review of Task-Based Outcomes using Low-Intensity Focused Transcranial Ultrasound Neuromodulation on Humans and Primates
                        <p>January 2026 (Under Review)</p>
                        </div>
                </div>
            </div>
        </div>

        <div className="research-subheader-wrapper">Unpublished</div>
            <div className="research-items-wrapper">
                <div className="research-item-wrapper" 
                onMouseOver={() => imageDarken('research-panels research-unpub-panel_1')}
                onMouseLeave={() => imageLighten('research-panels research-unpub-panel_1')}>
                    {/* <a href="https://github.com/jkaethee/UI-PRMD_Exercise_Model" target="_blank" rel="noopener noreferrer"> */}
                        <div className="research-panels research-unpub-panel_1"/>
                        <div className="img-text-wrapper">
                                <div className="subtitle">
                                    Exploring EEG-driven brain-heart coupling across sleep stages in individuals with sleep disorders 
                                    <p>April 2025</p>
                                </div>
                        </div>
                    {/* </a> */}
                </div>
                <div className="research-item-wrapper" 
                onMouseOver={() => imageDarken('research-panels research-unpub-panel_2')}
                onMouseLeave={() => imageLighten('research-panels research-unpub-panel_2')}>
                    <a href="https://github.com/jkaethee/UI-PRMD_Exercise_Model/blob/475c66aba07731adbe1c90a15462fd30be564593/manuscript.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="research-panels research-unpub-panel_2"/>
                        <div className="img-text-wrapper">
                                <div className="subtitle">
                                Development of a Generalizable Exercise Monitoring System using Kinect Data for Binary Classification of Performance
                                <p>December 2024</p>
                                </div>
                        </div>
                    </a>
                </div>
            </div>

    </div>
  )
}

export default ResearchPage;