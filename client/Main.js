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

  async selectAlbum(albumId) {
    try {
      const response = await axios.get(`/api/albums/${albumId}`);
      const album = response.data;
      this.setState({ selectedAlbum: album});
      // console.log('THIS IS ALBUM', album)
    } catch(error) {
      console.error(error.stack)
    }
  }

  deselectAlbum() {
    this.setState({selectedAlbum: {}})
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className="container">
          <AllAlbums
            albums={this.state.albums} selectAlbum={this.selectAlbum} />
          <SingleAlbum selectedAlbum={this.state.selectedAlbum}/> 
        </div>
        <Player />
      </div>
    )
  }
}

