import React from 'react';

const GetImageButton = props => {

    return (
        <div>
          <button onClick={props.onClick} type="submit">Get Rover Image</button>
        </div>
    );

}

export default GetImageButton;
