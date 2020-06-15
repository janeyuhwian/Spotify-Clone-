import React from 'react'

export default function Sidebar(props) {
    return (
        <div>
            <div id='sidebar'>
                <img src='juke.svg' id='logo' />
                <section>
                    <h4>
                        <a onClick = {props.deselectAlbum}>ALBUMS</a>
                    </h4>
                </section>
            </div>
        </div>
    )
}

