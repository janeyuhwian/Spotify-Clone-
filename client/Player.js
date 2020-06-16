// import React from 'react'

// export default function Player(props) {
//     return (
//         <div id='player-container'>
//         <div id='player-controls'>
//           <div className='row center'>
//             <i className='fa fa-step-backward' ></i>
//             <i className='fa fa-pause-circle' onClick={props.handleClick}></i>
//             <i className='fa fa-step-forward' ></i>
//           </div>
//         </div>
//       </div>
//     )
// }


import React from 'react'

export default function Player(props) {
    return (
        <div id='player-container'>
        <div id='player-controls'>
          <div className='row center'>
            <i className='fa fa-step-backward' ></i>
            <i className='fa fa-pause-circle' onClick={props.handleClick}></i>
            <i className='fa fa-step-forward' onClick={props.next}></i>
          </div>
        </div>
      </div>
    )
}

