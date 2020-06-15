import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'
import axios from 'axios'

export default class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      albums : []
    }
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api/albums')
      this.setState({
        albums: response.data
      })
    } catch(error) {
      console.error('Theres error!')
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
