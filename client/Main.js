import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'

const dummyData = [
  {
    "id": 1,
    "name": "No Dummy",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  },
  {
    "id": 2,
    "name": "I React to State",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  }
]

export default class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      albums : dummyData
    }
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className='container'>
        <AllAlbums albums={this.state.albums}/>
        </div>
        <Player />
      </div>
    )
  }
}
