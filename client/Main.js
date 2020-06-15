import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'
import axios from 'axios'
import SingleAlbum from './SingleAlbum'

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
  constructor() {
    super()

    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.selectAlbum = this.selectAlbum.bind(this)
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/api/albums')
      this.setState({
        albums: response.data
      })
    } catch (error) {
      console.error('Theres error!')
    }
  }

  async selectAlbum(album) {
    // const response = await axios.get(`/api/albums/${albumId}`);
    // const album = response.data;
    console.log('click!')
    this.setState({ selectedAlbum: album });
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className="container">
          <AllAlbums
            albums={this.state.albums} selectAlbum={this.selectAlbum} />
          <SingleAlbum album={this.state.selectedAlbum}/>
        </div>
        <Player />
      </div>
    )
  }
}