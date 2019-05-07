import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    /* console.log(imageUrl); */
    return (
        <div className="center ma">
            <div className="absolut mt3">
                <img id="inputimage" alt='' src={imageUrl} width="500px;" height="auto" />
            </div>
        </div>
    );
}

export default FaceRecognition;