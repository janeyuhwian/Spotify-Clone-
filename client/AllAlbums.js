import React from 'react';
import Album from './Album'

const AllAlbums = (props) => {

    return (
        <div id='albums' className='row wrap'>
            {props.albums.map(album => {
                return <Album
                    key={album.id}
                    artworkUrl={album.artworkUrl}
                    albumName={album.name}
                    artistName={album.artist.name}
                />
            })}
        </div>
    )
}

export default AllAlbums

