import React from 'react';

const Album = (props) => {
    return(
        <div className='album' onClick={props.onClick}>
            <a>
            <img src={props.artworkUrl} />
            <p>{props.albumName}</p>
            <small>{props.artistName}</small>
            </a>
        </div>
    )
}

export default Album