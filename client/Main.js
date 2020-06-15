import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'
import axios from 'axios'

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
    const response = await axios.get(`/api/albums/${albumId}`);
    const album = response.data;
    this.setState({ selectedAlbum: album });
  }


  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className="container">
          <SingleAlbum
            album={this.state.pickAlbum}
          />
          <AllAlbums
            albums={this.state.albums} pickAlbum={this.pickAlbum} />
        </div>
        <Player />
      </div>
    )
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className='container'>
          <AllAlbums albums={this.state.albums} />
        </div>
        <Player />
      </div>
    )
  }
}
