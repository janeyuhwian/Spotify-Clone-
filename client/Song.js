import React from 'react'


const Song = (props) => {

  // document.getElementById('app').appendChild(audio);
  const cssName = props.currentSong.name === props.songName  ? 'active' : 'fa fa-play-circle';

  return (
    <tr>
      <td><i className={cssName} onClick = {props.start}/></td>
      <td>{props.trackNum}</td>
      <td>{props.songName}</td>
      <td>{props.artistName}</td>
      <td>{props.songGenre}</td>
    </tr>
  )
}

export default Song