import React from "react";

const AllAlbums = (props) => {

  const albums = props.albums;

  return (
    <div id="albums" className="row wrap">
      {albums.map(album => {
        return (
          <div
            className="album clickable"
            key={album.id}
          >
            <a>
              <img src={album.artworkUrl} />
              <p>{album.name}</p>
              <small>{album.artist.name}</small>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default AllAlbums;
