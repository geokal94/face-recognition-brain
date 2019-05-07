import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box, imageUrl}) => {
    console.log(box)
    return (
        <div className="center ma">
            <div className="absolut mt3">
                <img id="inputimage" alt='' src={imageUrl} width="500px;" height="auto" />
            </div>
            <div className="bounding-box"
                style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}>
            </div>
        </div>
    );
}

export default FaceRecognition;