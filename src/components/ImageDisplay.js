import React from 'react';


const ImageDisplay = (props) => {
    let pics = props.pictures.map(photo => {
      console.log(photo.image_src);
      return (
        <li key={photo.id}><img src={photo.img_src} alt="satellite" /></li>
      )
    })
    return (
      <div>
        <h5>{props.rover}</h5>

        <ul> {pics} </ul>
      </div>

    )

};

export default ImageDisplay;
