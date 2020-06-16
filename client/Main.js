import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'
import axios from 'axios'
import SingleAlbum from './SingleAlbum'

const audio = document.createElement('audio');

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: [],
      selectedAlbum: {},
    }
    this.selectAlbum = this.selectAlbum.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
    this.start = this.start.bind(this)
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

  start() {
    audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    audio.load();
    audio.play(); 
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar deselectAlbum={this.deselectAlbum} />
        <div className="container">
            {this.state.selectedAlbum.id 
            ? <SingleAlbum selectedAlbum={this.state.selectedAlbum} start={this.start}/>
            : <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />}
        </div>
        <Player />
      </div>
    )
  }
}

