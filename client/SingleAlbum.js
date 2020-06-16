import React from 'react'

const SingleAlbum = (props) => {
    // console.log('props???????',props)



    return (
        <div>
            <div id='single-album' className='column'>
            <div className='album'>
              <a>
                <img src={props.selectedAlbum.artworkUrl} />
                <p>{props.selectedAlbum.name}</p>
                <small>{props.selectedAlbum.artist.name}</small>
              </a>
            </div>
            <table id='songs'>
              <tbody>
                <tr className='gray'>
                  <td />
                  <td>#</td>
                  <td>Title</td>
                  <td>Artist</td> 
                  <td>Genre</td>
                </tr>

                 {props.selectedAlbum.songs.map((song, index)  => {
                     return (
                        <tr key={song.id}>
                        <td><i className='fa fa-play-circle' onClick={() => props.start(index)}/></td>
                        <td>{index + 1}</td>
                        <td>{song.name}</td>
                        <td>{props.selectedAlbum.artist.name}</td>
                        <td>{song.genre}</td>
                      </tr>
                     )
                 })}
              </tbody>
            </table>
          </div>
        </div>
    )
}

export default SingleAlbum

