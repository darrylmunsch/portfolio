import React from 'react';
import resume from '../Resources/Resume.pdf'
import { PDFReader } from 'reactjs-pdf-reader';
import "../Styles/resume.css"



const ResumePage = () => {
    return (
        <div>
            <div className={"iframe-container"}>
                <iframe src={resume}  allowFullScreen />
            </div>
        </div>

    );
};

export default ResumePage;
